import React from 'react';


const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}    
        </li>);
    });
  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>Yummy sandwich with:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue To Checkout</p>
    </React.Fragment>
  );
};

export default orderSummary;