import React from "react";
import styled from "styled-components";

// import classes from "./BuildControls.css";

import BuildControl from "./BuildControl/BuildControl";

const StyledBuildControls = styled.div``;

const controls = [
  { label: "Beef", type: "beef" },
  { label: "Turkey", type: "turkey" },
  { label: "Cheese", type: "cheese" },
  { label: "Lettuce", type: "lettuce" },
  { label: "Tomato", type: "tomato" }
];

const BuildControls = props => (
  <StyledBuildControls>
    <p>Price: ${props.price.toFixed(2)}</p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button>Order Now</button>
  </StyledBuildControls>
);

export default BuildControls;
