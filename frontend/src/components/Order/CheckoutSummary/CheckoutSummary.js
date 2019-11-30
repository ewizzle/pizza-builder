import React from "react";
import styled from "styled-components";

import Sandwich from "../../Sandwich/Sandwich";
import Button from "../../UI/Button/Button";

const StyledCheckout = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
`;

const checkoutSummary = props => {
  return (
    <StyledCheckout>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Sandwich ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </StyledCheckout>
  );
};

export default checkoutSummary;
