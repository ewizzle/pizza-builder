import React from 'react';

import classes from './Sandwich.css';
import SandwichIngredient from './SandwichIngredient/SandwichIngredient';

const sandwich = (props) => {
  console.log('this is before transformation ',props.ingredients);
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <SandwichIngredient key={igKey + i} type={igKey} />;
      });
    }).reduce((arr, el) => {
      return arr.concat(el)
  }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  console.log('this is inside sandwich js transformed one: ',transformedIngredients);

  return (
    <div className={classes.Sandwich}>
      <SandwichIngredient type='top-bread' />
      {transformedIngredients}
      <SandwichIngredient type='bottom-bread' />
    </div>
  );
};

export default sandwich;