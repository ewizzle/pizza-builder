import styled from 'styled-components';
import Footer from '../components/Footer';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import About from '../components/About';
import Nav from '../components/Nav';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
`;

const SignupPage = props => (
  <Columns>
    <Signin />
    <Signup />
  </Columns>
);

const StyledHome = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .intro {
    text-align: center;
  }
  img {
    border: 2px solid black;
    height: 350px;
    width: 90%;
    object-fit: cover;
  }
`;

const HomePage = () => (
  <StyledHome>
    <div className='intro'>
      <Nav />
      <h1>Welcome</h1>
      <img src='/pizza-on-plate.jpg' alt='picture of a pizza' />
      <About />
      <h3>please signin or signup to place an order</h3>
    </div>
    <SignupPage />
    <Footer />
  </StyledHome>
);

export default HomePage;
