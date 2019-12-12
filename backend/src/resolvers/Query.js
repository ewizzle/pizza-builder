const { forwardTo } = require('prisma-binding');

const Query = {
  orders: forwardTo('db'),
  order: forwardTo('db'),
  ordersConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    // check if there's a current user
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },
  async order(parent, args, ctx, info) {
    // query the current order
    const order = await ctx.db.query.order(
      {
        where: { id: args.id }
      },
      info
    );
    // return the order
    return order;
  },
  async orders(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('you must be signed in!');
    }
    return ctx.db.query.orders(
      {
        where: {
          user: { id: userId }
        }
      },
      info
    );
  }
};

module.exports = Query;
