import Router from 'next/router';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';

const Nav = () => (
  <User>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error: ${error}`;
      const me = data.me;
      return (
        <NavStyles>
          <Link href='/'>
            <a>Home</a>
          </Link>
          {me && (
            <>
              <div>
                <a onClick={() => Router.push('/pizza-builder')}>
                  Make a Pizza
                </a>
              </div>
              <Signout />
            </>
          )}
          {!me && (
            <div>
              <a onClick={() => Router.push('/signup')}>Sign In</a>
            </div>
          )}
        </NavStyles>
      );
    }}
  </User>
);

export default Nav;
