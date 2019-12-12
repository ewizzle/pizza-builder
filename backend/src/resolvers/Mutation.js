const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');

const Mutations = {
  async createOrder(parent, args, ctx, info) {
    const order = await ctx.db.mutation.createOrder(
      {
        data: {
          user: {
            connect: {
              id: ctx.request.userId
            }
          },
          ...args
        }
      },
      info
    );
    return order;
  },
  async createPizza(parent, args, ctx, info) {
    const pizza = await ctx.db.mutation.createPizza(
      {
        data: {
          ...args
        }
      },
      info
    );
    return pizza;
  },
  updatePizza(parent, args, ctx, info) {
    // take a copy of the updates
    const updates = { ...args };
    // remove the ID from the updates
    delete updates.id;
    // run the update method
    return ctx.db.mutation.updatePizza(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  },
  async deleteOrder(parent, args, ctx, info) {
    const where = { id: args.id };
    return ctx.db.mutation.deleteOrder({ where }, info);
  },
  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser(
      {
        data: { ...args, password }
      },
      info
    );
    // create the JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    return user;
  },
  async signin(parent, { email, password }, ctx, info) {
    // check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // check if the password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid Password');
    }
    // generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    // return the user
    return user;
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'Have a good day!' };
  },
  async requestReset(parent, args, ctx, info) {
    // check if this is a real user
    const user = await ctx.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(`No such user found for email: ${args.email}`);
    }
    // set a reset token and expiry on that user
    const randomBytesPromisified = promisify(randomBytes);
    const resetToken = (await randomBytesPromisified(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; //1 hour from now
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    // email them the reset token
    const mailRes = await transport.sendMail({
      from: 'ewiz1020@gmail.com',
      to: user.email,
      subject: 'Your Password Reset Token',
      html: makeANiceEmail(`Your Password Reset Token is here \n\n
      <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">
      Click Here to Reset</a>`)
    });

    // return the message
    return { message: 'Thank you' };
  },
  async resetPassword(parent, args, ctx, info) {
    // check if the passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error("Your passwords don't match!");
    }
    // check if its not expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    });
    if (!user) {
      throw new Error('this token is expired or invalid');
    }
    // hash their new password
    const password = await bcrypt.hash(args.password, 10);
    // save the new password to the user and remove old resetToken
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    });
    // generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    // set the JWT cookie
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    // return the new user
    return updatedUser;
  }
};

module.exports = Mutations;
