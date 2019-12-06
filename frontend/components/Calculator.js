import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';

const SteelDeskWapper = styled.div`
  position: absolute;
  z-index: 500;
  left: ${props => props.animate}px;

  .steeldesk {
    background: #333 url(/steel.jpg) no-repeat;
    position: absolute;
    width: 370px;
    height: 800px;
    left: 0px;
    top: 0px;
    z-index: 400;
    opacity: 0;
    box-shadow: 10px 9px 13px -6px rgba(0, 0, 0, 0.42);
    animation-name: steeldesk;
    animation-duration: 1s;
    animation-delay: 2s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    .showHideCalculator {
      position: absolute;
      z-index: 100;
      left: 370px;
      top: 0px;
      width: 100px;
      text-align: center;
      height: 50px;
      padding-top: 14px;
      background: #333 url(/steel.jpg) 25% 70% no-repeat;
      box-shadow: 6px 6px 33px -6px rgba(0, 0, 0, 0.42);
      color: #fff;
      cursor: pointer;
      border-radius: 0px 0px 20px 0px;
    }
    .calculator {
      background: url(/caseslip.png);
      width: 343px;
      height: 79px;
      position: relative;
      top: 10px;
      left: 10px;
      .receipt {
        background: url(/receipt.png) no-repeat 0px 0px;
        width: 277px;
        height: 408px;
        z-index: 5;
        position: absolute;
        left: 30px;
        top: 38px;

        .content {
          width: 240px;
          padding-left: 34px;
          padding-top: 15px;
          .rheader {
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
            border-bottom: 2px solid #333;
          }
          .total,
          .totalprice {
            text-transform: uppercase;
            font-weight: bold;
            border-top: 2px solid #333;
          }
          .totalprice {
            text-align: right;
          }
          .niceday {
            font-size: 10px;
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
          }
          .ingredientprice {
            text-align: right;
          }
        }
      }
    }
    .btn-rating {
      position: absolute;
      top: 700px;
      left: 60px;
      padding: 10px 90px;
    }
  }

  @keyframes steeldesk {
    0% {
      opacity: 1;
      left: -800px;
    }
    100% {
      left: 0px;
      opacity: 1;
    }
  }
`;

class Calculator extends Component {
  state = {
    ingredients: this.props.pizzaData.ingredients,
    ingredientHeight: 24,
    showhideSteelDesk: 0,
    showHideTitle: 'HIDE'
  };
  listIngredients = () => {
    //add base automatic
    const ingredients = [this.state.ingredients[0], ...this.props.selected];
    return ingredients.map(item => {
      return (
        <Row key={item.title}>
          <Col>{item.title}</Col>
          <Col className='ingredientprice'>${item.price}</Col>
        </Row>
      );
    });
  };

  listTotalPrice = () => {
    //add base price automatic
    let price = this.state.ingredients[0].price;
    for (let ing of this.props.selected) {
      price += ing.price;
    }
    return (
      <Row>
        <Col className='total'>total</Col>
        <Col className='totalprice'>${String(price).substr(0, 4)}</Col>
      </Row>
    );
  };
  receiptLength = () => {
    let length = this.props.selected.length * this.state.ingredientHeight - 280;
    let style = {
      backgroundPosition: '0px ' + length + 'px'
    };

    return style;
  };
  handleRating = e => {
    this.props.handleShowRating();
  };

  CalShowHideSteelDesk = () => {
    let showhide = this.state.showhideSteelDesk ? 0 : 1;
    let left = 0;
    let title = 'HIDE';
    if (showhide !== 0) {
      left = -373;
      title = 'SHOW';
    }
    this.setState({ showhideSteelDesk: left, showHideTitle: title });
  };

  render() {
    return (
      <SteelDeskWapper animate={this.state.showhideSteelDesk}>
        <div
          className='steeldesk'
          style={this.props.showCalculator}
          ref='steelDesk'
        >
          <div
            className='showHideCalculator'
            onClick={this.CalShowHideSteelDesk}
          >
            {this.state.showHideTitle}
          </div>
          <div className='calculator'>
            <div className='receipt' style={this.receiptLength()}>
              <div className='content'>
                <Row>
                  <Col className='rheader'>receipt</Col>
                </Row>
                <Fragment>{this.listIngredients()}</Fragment>
                <Fragment>{this.listTotalPrice()}</Fragment>
                <Row>
                  <Col className='niceday'>have a nice day</Col>
                </Row>
              </div>
            </div>
            <Button
              className='btn btn-rating'
              variant='secondary'
              onClick={this.handleRating}
            >
              Rating
            </Button>
          </div>
        </div>
      </SteelDeskWapper>
    );
  }
}
Calculator.propTypes = {
  selected: propTypes.arrayOf(
    propTypes.oneOfType([
      propTypes.objectOf(
        propTypes.oneOfType([
          propTypes.string,
          propTypes.string,
          propTypes.number,
          propTypes.number
        ])
      )
    ]).isRequired
  ),
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
  )
};
export default Calculator;
