import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTopBread = styled.div`
  height: 15%;
  width: 85%;
  background-color: #fbae25;
  border-radius: 35px 35px 10px 10px;
  margin: 1% auto;
`;

const StyledBottomBread = styled.div`
  height: 16%;
  width: 85%;
  background-color: #fbae25;
  border-radius: 10px 10px 25px 25px;
  margin: 1% auto;
`;

const StyledLettuce = styled.div`
  height: 4%;
  width: 95%;
  background: linear-gradient(#b1d45f, #70961d);
  margin: 1% auto;
  border-radius: 6px;
`;

const StyledBeef = styled.div`
  height: 9%;
  width: 90%;
  margin: 1% auto;
  background: linear-gradient(#4c2500, #814308);
  border-radius: 10px;
`;

const StyledTurkey = styled.div`
  height: 8%;
  width: 90%;
  margin: 1% auto;
  background: linear-gradient(#efcadc, #814308);
  border-radius: 10px;
`;

const StyledTomato = styled.div`
  height: 5%;
  width: 90%;
  background: linear-gradient(#ff3939, #ff7575);
  margin: 1% auto;
  border-radius: 8px;
`;

const StyledCheese = styled.div`
  height: 4%;
  width: 92%;
  background: linear-gradient(#ffcb00, #ffd42c);
  margin: 1% auto;
  border-radius: 6px;
`;

class SandwichIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "top-bread":
        ingredient = <StyledTopBread />;
        break;
      case "bottom-bread":
        ingredient = <StyledBottomBread />;
        break;
      case "cheese":
        ingredient = <StyledCheese />;
        break;
      case "beef":
        ingredient = <StyledBeef />;
        break;
      case "turkey":
        ingredient = <StyledTurkey />;
        break;
      case "lettuce":
        ingredient = <StyledLettuce />;
        break;
      case "tomato":
        ingredient = <StyledTomato />;
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
