import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledIngredient = styled.div`
  .menu {
    background: url(/menu.png) no-repeat;
    background-size: contain;
    width: 84%;
    position: relative;
    top: -900px;
    animation-name: Menu;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    h3 {
      padding-top: 20px;
      padding-left: 90px;
      margin-bottom: 56px;
    }
    .ingredients {
      padding-left: 57px;
      padding-right: 90px;
      height: 600px;
      font-family: 'Merienda', cursive;
    }
  }

  @keyframes Menu {
    0% {
      top: -900px;
    }
    100% {
      top: -10px;
    }
  }

  /* radio */
  .funkyradio {
    .div {
      clear: both;
      overflow: hidden;
    }
    label {
      width: 100%;
      border-radius: 3px;
      border: 1px solid #8a7812;
      font-weight: normal;
    }
    input[type='checkbox']:empty {
      display: none;
      ~ label {
        position: relative;
        line-height: 2.5em;
        text-indent: 3.25em;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        &:before {
          position: absolute;
          display: block;
          top: 0;
          bottom: 0;
          left: 0;
          content: '';
          width: 2.5em;
          background: #523905;
          border-radius: 3px 0 0 3px;
        }
      }
    }
    input[type='checkbox']:hover:not(:checked) {
      ~ label {
        color: #888;
        &:before {
          content: '\2714';
          text-indent: 0.9em;
          color: #c2c2c2;
        }
      }
    }
    input[type='checkbox']:checked {
      ~ label {
        color: #141414;
        &:before {
          content: '\2714';
          text-indent: 0.9em;
          color: #333;
          background-color: #ccc;
        }
      }
    }
    input[type='checkbox']:focus {
      ~ label {
        &:before {
          box-shadow: 0 0 0 3px #5cb85c;
        }
      }
    }
  }

  .funkyradio-success input[type='checkbox']:checked ~ label:before {
    color: #fff;
    background-color: #26a316;
  }
`;

class Ingredient extends Component {
  state = {
    ingredients: this.props.pizzaData.ingredients
  };

  handleClick = e => {
    let newselected = [];
    for (let ing of this.state.ingredients) {
      if (ing.title !== 'Base') {
        if (document.getElementById(ing.htmlname).checked) {
          newselected.push(ing);
        }
      }
    }

    this.props.handleIngredients(newselected);
  };

  handleIngredientsReset = () => {
    const AllIngredients = document.getElementsByClassName('input-ingredients');
    for (let ing of AllIngredients) {
      ing.checked = false;
    }
  };

  creatList = () => {
    return this.state.ingredients.map(item => {
      if (item.title !== 'Base') {
        return (
          <div className='funkyradio-success' key={item.title}>
            <input
              type='checkbox'
              onClick={this.handleClick}
              id={item.htmlname}
              className='input-ingredients'
            />
            <label htmlFor={item.htmlname}>
              {item.title + ' ($' + item.price + ')'}
            </label>
          </div>
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <StyledIngredient>
        <div className='ingredients'>
          <div className='funkyradio'>{this.creatList()}</div>
        </div>
      </StyledIngredient>
    );
  }
}
Ingredient.propTypes = {
  pizzaData: propTypes.objectOf(
    propTypes.oneOfType([
      propTypes.string.isRequired,
      propTypes.arrayOf(
        propTypes.oneOfType([
          propTypes.objectOf(
            propTypes.oneOfType([
              propTypes.string,
              propTypes.string,
              propTypes.number,
              propTypes.number
            ])
          )
        ]).isRequired,
        propTypes.arrayOf(
          propTypes.objectOf(propTypes.oneOfType([propTypes.string]))
        ).isRequired
      )
    ])
  ),
  handleIngredients: propTypes.func.isRequired
};
export default Ingredient;
