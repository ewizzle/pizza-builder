import styled from 'styled-components';
import React, { Component } from 'react';
import Signout from './Signout';

import FinalPizza from './FinalPizza';
import Ingredient from './Ingredient';
import Pizza from './Pizza';
// import pizzaData from '../pizzadata.json';

const pizzaData = {
  title: 'Custom Pizza Builder',
  ingredients: [
    {
      htmlname: 'Base',
      title: 'Base',
      price: 8.99,
      points: 4
    },
    {
      htmlname: 'Tomato-sauce',
      title: 'Tomato-sauce',
      price: 0.5,
      points: 5
    },
    {
      htmlname: 'Cheese',
      title: 'Cheese',
      price: 1.4,
      points: 15
    },
    {
      htmlname: 'Bacon',
      title: 'Bacon',
      price: 2.3,
      points: 10
    },
    {
      htmlname: 'Pepperoni',
      title: 'Pepperoni',
      price: 1.4,
      points: 10
    },
    {
      htmlname: 'Mushroom',
      title: 'Mushroom',
      price: 1.4,
      points: 2
    },
    {
      htmlname: 'Onion',
      title: 'Onion',
      price: 0.3,
      points: 5
    },
    {
      htmlname: 'Chilli',
      title: 'Chilli',
      price: 1.4,
      points: 10
    },

    {
      htmlname: 'Olive',
      title: 'Olive',
      price: 1.4,
      points: 5
    },
    {
      htmlname: 'Shrimp',
      title: 'Shrimp',
      price: 2,
      points: 7
    },
    {
      htmlname: 'Pineapple',
      title: 'Pineapple',
      price: 2.8,
      points: 1
    }
  ]
};

const StyledPizza = styled.div`
  background: url(/bgtable.png);
  overflow: hidden;
  .container {
    display: flex;
    justify-content: space-around;
  }
`;

class PizzaBuilder extends Component {
  state = {
    selectedIngredients: [],
    showFinalPizza: { visibility: 'hidden', animationPlayState: 'paused' },
    showPizza: { visibility: 'visible' }
  };

  handleIngredients = ingredients => {
    this.setState({ selectedIngredients: ingredients });
  };
  handleIntroMessage = modalShow => {
    this.setState({ showIntroMessage: modalShow });
  };
  handleTryAgain = () => {
    this.setState({ selectedIngredients: [] });
    this.refs.reset.handleIngredientsReset();
  };
  handleShowFinalPizza = () => {
    this.setState({
      showFinalPizza: { visibility: 'visible', animationPlayState: 'running' },
      showPizza: { visibility: 'hidden' }
    });
  };

  render() {
    return (
      <StyledPizza>
        <FinalPizza
          pizzaData={pizzaData}
          selected={this.state.selectedIngredients}
          showFinalPizza={this.state.showFinalPizza}
        />
        <img src='/Canopy.png' />
        <div className='container'>
          <div>
            <Pizza
              pizzaData={pizzaData}
              selected={this.state.selectedIngredients}
              showPizza={this.state.showPizza}
            />
          </div>
          <div className='menu'>
            <h3>Toppings:</h3>
            <Ingredient
              pizzaData={pizzaData}
              handleIngredients={this.handleIngredients}
              ref='reset'
            />
            <button onClick={this.handleShowFinalPizza}>Place the order</button>
          </div>
        </div>
        <Signout />
      </StyledPizza>
    );
  }
}

export default PizzaBuilder;
