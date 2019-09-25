import React from "react";
import styled from "styled-components";

const StyledBuildControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px auto;
`;

// import classes from './BuildControl.css';

const BuildControl = props => (
  <StyledBuildControl>
    <div>{props.label}</div>
    <button onClick={props.added}>Add</button>
    <button onClick={props.removed} disabled={props.disabled}>
      Remove
    </button>
  </StyledBuildControl>
);

export default BuildControl;
