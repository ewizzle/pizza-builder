import styled from 'styled-components';
import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Calculate from './Calculator';
import FinalPizza from './FinalPizza';
import Ingredient from './Ingredient';
import Pizza from './Pizza';
import pizzaData from '../pizzadata.json';

const StyledPizza = styled.div`
  background: url(/bgtable.png);
  overflow: hidden;
`;

class PizzaBuilder extends Component {
  state = {
    selectedIngredients: [],
    showFinalPizza: { visibility: 'hidden', animationPlayState: 'paused' },
    // showCalculator: { visibility: 'visible' },
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
      // showCalculator: { visibility: 'hidden' },
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
        {/* <Calculate
          pizzaData={pizzaData}
          selected={this.state.selectedIngredients}
          showCalculator={this.state.showCalculator}
        /> */}
        <Container>
          <Row>
            <Col className='mb-2'>
              <Image src='/Canopy.png' fluid />
            </Col>
          </Row>
          <Row>
            <Col sm={7}>
              <Row>
                <Col>
                  <Pizza
                    pizzaData={pizzaData}
                    selected={this.state.selectedIngredients}
                    showPizza={this.state.showPizza}
                  />
                </Col>
              </Row>
            </Col>
            <Col sm={5}>
              <div className='menu'>
                <h3>Toppings:</h3>
                <Ingredient
                  pizzaData={pizzaData}
                  handleIngredients={this.handleIngredients}
                  ref='reset'
                />
                <button onClick={this.handleShowFinalPizza}>
                  Place the order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </StyledPizza>
    );
  }
}

export default PizzaBuilder;
