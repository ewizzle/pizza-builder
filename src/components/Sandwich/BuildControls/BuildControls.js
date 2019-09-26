import React from "react";
import styled from "styled-components";

import BuildControl from "./BuildControl/BuildControl";

const StyledBuildControls = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;

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
