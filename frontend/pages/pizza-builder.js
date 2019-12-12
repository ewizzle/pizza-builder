import PizzaBuilder from '../components/PizzaBuilder';
import PleaseSignin from '../components/PleaseSignin';

const SignupPage = props => (
  <>
    <PleaseSignin>
      <PizzaBuilder />
    </PleaseSignin>
  </>
);

export default SignupPage;
