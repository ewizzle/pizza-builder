import React, { Component } from 'react';
import Layout from './hoc/Layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';

class App extends Component {
  render() {
   return(
     <Layout>
      <div>Hello</div>
      <PizzaBuilder />
     </Layout>
   );
  }
}

export default App;
