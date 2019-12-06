import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledFinalPizza = styled.div`
  .pizzafinal {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 100;
    animation-name: Rotate;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    background-color: aqua;
    .pizzaholder {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      border-radius: 600px;
      width: 600px;
      height: 600px;
      background-color: #333;
      .pizzalayer {
        position: relative;
        top: 24px;
        left: 30px;
        .layer {
          position: absolute;
          width: 550px;
          height: 550px;
          opacity: 0;
          animation-name: Fadein;
          animation-duration: 4s;
          animation-fill-mode: forwards;
        }
      }
    }
  }

  @keyframes Rotate {
    //don't work in Firefox,
    0% {
      background: repeating-conic-gradient(
        rgb(0, 255, 255) 0 15deg,
        rgb(0, 200, 200) 0 30deg
      );
    }
    100% {
      background: repeating-conic-gradient(
        rgb(0, 200, 200) 0 15deg,
        rgb(0, 255, 255) 0 30deg
      );
    }
  }

  @keyframes Fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Banner */

  .bannerholder {
    position: absolute;
    left: 50%;
    top: 500px;
    z-index: 1000;
    opacity: 0;
    animation-name: Fadein;
    animation-duration: 6s;
    animation-fill-mode: forwards;
    .banner {
      position: absolute;
      display: block;
      margin: 100px -200px;
      width: 400px;
      height: 60px;
      border: 1px solid #8a1;
      font: normal 30px/60px 'Rye';
      text-align: center;
      color: #451;
      background: #9b2;
      border-radius: 4px;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.15) inset,
        0 6px 10px rgba(0, 0, 0, 0.15);
      &:before,
      &:after {
        content: '';
        position: absolute;
        z-index: -1;
        left: -70px;
        top: 24px;
        display: block;
        width: 88px;
        height: 0px;
        border: 30px solid #9b2;
        border-right: 20px solid #791;
        border-bottom-color: #94b81e;
        border-left-color: transparent;
        transform: rotate(-5deg);
      }
      &:after {
        left: auto;
        right: -70px;
        border-left: 20px solid #791;
        border-right: 30px solid transparent;
        transform: rotate(5deg);
      }
    }
    .bannerbutton {
      position: absolute;
      top: 200px;
      left: -57px;
      width: 100px;
    }
  }
  @keyframes Fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

class Finalpizza extends Component {
  state = {
    ingredients: this.props.pizzaData.ingredients
  };

  tryAgain = () => {
    document.location.reload();
  };
  finalPizza = () => {
    // add base automatic
    const pizzaLayersData = [this.state.ingredients[0], ...this.props.selected];

    return pizzaLayersData.map(item => {
      return (
        <div key={item.title}>
          <div>
            <Image
              className='layer'
              style={this.props.showFinalPizza}
              src={'/' + item.title + '.png'}
            />
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <StyledFinalPizza>
        <div className='pizzafinal' style={this.props.showFinalPizza}>
          <div className='bannerholder' style={this.props.showFinalPizza}>
            <div className='banner'>Bon Appétit</div>
            <Button
              variant='secondary'
              className='bannerbutton'
              onClick={this.tryAgain}
            >
              Try again?
            </Button>
          </div>
          <div className='pizzaholder'>
            <div className='pizzalayer'>{this.finalPizza()}</div>
          </div>
        </div>
      </StyledFinalPizza>
    );
  }
}

export default Finalpizza;
