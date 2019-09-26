import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSandwichIngredient = styled.div`
  .topBread {
    height: 15%;
    width: 85%;
    background-color: #fbae25;
    border-radius: 35px 35px 10px 10px;
    margin: 1% auto;
  }

  .bottomBread {
    height: 16%;
    width: 85%;
    background-color: #fbae25;
    border-radius: 10px 10px 25px 25px;
    margin: 1% auto;
  }

  .lettuce {
    height: 4%;
    width: 95%;
    background: linear-gradient(#b1d45f, #70961d);
    margin: 1% auto;
    border-radius: 6px;
  }

  .beef {
    height: 9%;
    width: 90%;
    margin: 1% auto;
    background: linear-gradient(#4c2500, #814308);
    border-radius: 10px;
  }

  .turkey {
    height: 8%;
    width: 90%;
    margin: 1% auto;
    background: linear-gradient(#efcadc, #814308);
    border-radius: 10px;
  }

  .tomato {
    height: 5%;
    width: 90%;
    background: linear-gradient(#ff3939, #ff7575);
    margin: 1% auto;
    border-radius: 8px;
  }

  .cheese {
    height: 4%;
    width: 92%;
    background: linear-gradient(#ffcb00, #ffd42c);
    margin: 1% auto;
    border-radius: 6px;
  }
`;

class SandwichIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "top-bread":
        ingredient = <StyledSandwichIngredient className="topBread" />;
        break;
      case "bottom-bread":
        ingredient = <StyledSandwichIngredient className="bottomBread" />;
        break;
      case "cheese":
        ingredient = <StyledSandwichIngredient className="cheese" />;
        break;
      case "beef":
        ingredient = <StyledSandwichIngredient className="beef" />;
        break;
      case "turkey":
        ingredient = <StyledSandwichIngredient className="turkey" />;
        break;
      case "lettuce":
        ingredient = <StyledSandwichIngredient className="lettuce" />;
        break;
      case "tomato":
        ingredient = <StyledSandwichIngredient className="tomato" />;
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
