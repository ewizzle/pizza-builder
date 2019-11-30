import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  :first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  :disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  .Success {
    color: #5c9210;
  }

  .Danger {
    color: #944317;
  }
`;

const button = props => (
  <StyledButton
    disabled={props.disabled}
    className={[Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </StyledButton>
);

export default button;
