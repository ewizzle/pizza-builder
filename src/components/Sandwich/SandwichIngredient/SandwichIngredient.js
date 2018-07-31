import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './SandwichIngredient.css';

class SandwichIngredient extends Component {
  render () {
    let ingredient = null;
  
    switch( this.props.type ) {
    case ('top-bread'): 
      ingredient = <div className={classes.topBread}></div>;
      break;
    case ('bottom-bread'): 
      ingredient = <div className={classes.bottomBread}></div>;
      break;
    case ('cheese'): 
      ingredient = <div className={classes.cheese}></div>;
      break;
    case ('beef'): 
      ingredient = <div className={classes.beef}></div>;
      break;
    case ('turkey'): 
      ingredient = <div className={classes.turkey}></div>;
      break;
    case ('lettuce'): 
      ingredient = <div className={classes.lettuce}></div>;
      break;
    case ('tomato'): 
      ingredient = <div className={classes.tomato}></div>;
      break;
    default: 
      ingredient = null;
    } 

    return ingredient;
  }
}

SandwichIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default SandwichIngredient;