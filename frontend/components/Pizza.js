import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledPizza = styled.div`
  .Pizza {
    height: 50vw;
    width: 60vw;
    position: relative;
    .Base {
      position: absolute;
      z-index: 10;
      background: url(/Base.png) no-repeat;
      background-size: contain;
      height: 50vw;
      width: 50vw;
      max-width: 590px;
      max-height: 571px;
      left: -1000px;
      top: 0px;
      animation-name: onShovel;
      animation-duration: 1s;
      animation-delay: 1s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    }

    .ingredient {
      position: absolute;
      left: 5vw;
      height: 50vw;
      width: 50vw;
      max-width: 590px;
      max-height: 571px;
    }

    .Shovel {
      position: absolute;
      z-index: 1;
      background: url(/Shovel.png) no-repeat;
      background-size: contain;
      height: 55vw;
      width: 1000px;
      left: -1000px;
      animation-name: Shovel;
      animation-delay: 1s;
      animation-duration: 1s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    }
    @media (max-width: 1024px) {
      @keyframes Shovel {
        0% {
          left: -1000px;
          top: 0px;
        }
        100% {
          left: -160px;
          top: 0;
        }
      }
    }

    @media (max-width: 768px) {
      @keyframes Shovel {
        0% {
          left: -1000px;
          top: 0px;
        }
        100% {
          left: -160px;
          top: 0px;
        }
      }
    }

    @media (min-width: 1024px) {
      @keyframes Shovel {
        0% {
          left: -2000px;
          top: 0px;
        }
        100% {
          left: -180px;
          top: 0px;
        }
      }
    }

    @keyframes onShovel {
      0% {
        left: -1600px;
        top: 0px;
      }
      100% {
        left: 15vw;
        top: 0px;
      }
    }
  }
`;

class Pizza extends Component {
  state = {
    ingredient: this.props.pizzaData.ingredients
  };

  createLayes = () => {
    let localLayer = 100;
    return this.state.ingredient.map(item => {
      let style = {};

      for (let nameOfLayer of this.props.selected) {
        if (nameOfLayer.title === item.title) {
          style = {
            zIndex: localLayer,
            display: 'block',
            background: `url('/${item.title}.png') no-repeat`,
            backgroundSize: 'contain'
          };
        }
        localLayer++;
      }

      return (
        <div
          className='ingredient'
          key={item.title}
          style={style}
          ref={item.htmlname}
        />
      );
    });
  };

  render() {
    return (
      <StyledPizza>
        <div className='Pizza' style={this.props.showPizza}>
          <div className='Shovel' />
          <div className='Base' /> {this.createLayes()}
        </div>
      </StyledPizza>
    );
  }
}

Pizza.propTypes = {
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
export default Pizza;
