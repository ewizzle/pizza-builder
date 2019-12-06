import styled from 'styled-components';
import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Calculate from './Calculator';
import FinalPizza from './FinalPizza';
import Ingredient from './Ingredient';
import Pizza from './Pizza';
import pizzaData from '../pizzadata.json';
import Rating from './Rating';
import IntroMessage from './Intro';

const StyledPizza = styled.div`
  background: url(/bgtable.png);
  overflow: hidden;
`;

class PizzaBuilder extends Component {
  state = {
    selectedIngredients: [],
    showIntroMessage: false,
    showRating: false,
    showFinalPizza: { visibility: 'hidden', animationPlayState: 'paused' },
    showCalculator: { visibility: 'visible' },
    showPizza: { visibility: 'visible' }
  };

  handleIngredients = ingredients => {
    this.setState({ selectedIngredients: ingredients });
  };
  handleIntroMessage = modalShow => {
    this.setState({ showIntroMessage: modalShow });
  };
  handleTryAgain = () => {
    this.setState({ showRating: false, selectedIngredients: [] });
    this.refs.reset.handleIngredientsReset();
  };
  handleShowRating = () => {
    this.setState({ showRating: true });
  };
  handleShowFinalPizza = () => {
    this.setState({
      showFinalPizza: { visibility: 'visible', animationPlayState: 'running' },
      showCalculator: { visibility: 'hidden' },
      showPizza: { visibility: 'hidden' },
      showRating: false
    });
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ showIntroMessage: true });
    }, 3000);
  };

  render() {
    return (
      <StyledPizza>
        <FinalPizza
          pizzaData={pizzaData}
          selected={this.state.selectedIngredients}
          showFinalPizza={this.state.showFinalPizza}
        />
        <Rating
          pizzaData={pizzaData}
          selected={this.state.selectedIngredients}
          handleTryAgain={this.handleTryAgain}
          handleShowRating={this.state.showRating}
          handleFinalPizza={this.handleShowFinalPizza}
        />
        <Calculate
          pizzaData={pizzaData}
          handleShowRating={this.handleShowRating}
          selected={this.state.selectedIngredients}
          showCalculator={this.state.showCalculator}
        />
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
              </div>
            </Col>
          </Row>
        </Container>
        {/* <IntroMessage
          showIntroMessage={this.state.showIntroMessage}
          handlemessage={this.handleIntroMessage}
        /> */}
      </StyledPizza>
    );
  }
}

export default PizzaBuilder;
