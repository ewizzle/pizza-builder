import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Sandwich from '../../components/Sandwich/Sandwich';
import Spinner from '../../components/UI/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import BuildControls from '../../components/BuildControls/BuildControls';

class SandwichBuilder extends Component {
  state = {
    purchasing: false
  }

  componentDidMount() {
    this.props.onIngredientsInitialize();
  }

  purchaseHandler = () => {

  }

  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for( let key in disabledInfo ){
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let sandwich = this.props.error ? 'Something went wrong' : <Spinner />;
    let orderSummary = null;

    if(this.props.ings) {
      sandwich = (
        <React.Fragment>
          <Sandwich ingredients={this.props.ings} />
          <BuildControls 
          ingredientAdded={this.props.onIngredientAdd}
          ingredientRemoved={this.props.onIngredientRemove}
          disabled={disabledInfo}
          price={this.props.price}/>
        </React.Fragment>
      );

      orderSummary = <OrderSummary 
        ingredients={this.props.ings} />;

    }
    return (
      <React.Fragment>
        <Modal>
          {/* {orderSummary} */}
        </Modal>
        {sandwich}  
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.sandwichBuilder.ingredients,
    error: state.sandwichBuilder.error,
    price: state.sandwichBuilder.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onIngredientsInitialize: () => dispatch(actions.ingredientsInitialize()),
    onIngredientAdd: (ing) => dispatch(actions.addIngredient(ing)),
    onIngredientRemove: (ing) => dispatch(actions.removeIngredient(ing)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SandwichBuilder);