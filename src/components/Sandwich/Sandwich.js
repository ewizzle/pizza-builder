import React from 'react';

import classes from './Sandwich.css';
import SandwichIngredient from './SandwichIngredient/SandwichIngredient';

const sandwich = (props) => {
  return (
    <div className={classes.Sandwich}>
      <SandwichIngredient type='top-bread' />
      
      <SandwichIngredient type='bottom-bread' />
    </div>
  );
};

export default sandwich;