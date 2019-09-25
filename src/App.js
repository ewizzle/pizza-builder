import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import SandwichBuilder from "./containers/SandwichBuilder/SandwichBuilder";

class App extends Component {
  render() {
    return (
      <Layout>
        <div>Hello</div>
        <SandwichBuilder />
      </Layout>
    );
  }
}

export default App;
