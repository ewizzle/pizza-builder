import React, { Component } from 'react';

import Sandwich from '../../components/Sandwich/Sandwich';

class SandwichBuilder extends Component {
  render() {
    return (
      <React.Fragment>
        <Sandwich />
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}

export default SandwichBuilder;