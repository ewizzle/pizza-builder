import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../src/store/actions";
import Sandwich from "../src/components/Sandwich/Sandwich";
import Spinner from "../src/components/UI/Spinner";
import Modal from "../src/components/UI/Modal/Modal";
import OrderSummary from "../src/components/Sandwich/OrderSummary/OrderSummary";
import BuildControls from "../src/components/Sandwich/BuildControls/BuildControls";

class SandwichBuilder extends Component {
  state = {
    purchasing: false
  };

  componentDidMount() {
    this.props.onIngredientsInitialize();
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let sandwich = this.props.error ? "Something went wrong" : <Spinner />;
    let orderSummary = null;

    if (this.props.ings) {
      sandwich = (
        <>
          <Sandwich ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdd}
            ingredientRemoved={this.props.onIngredientRemove}
            disabled={disabledInfo}
            price={this.props.price}
            ordered={this.purchaseHandler}
          />
        </>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCancelled={this.purchaseCancelHandler}
        />
      );
    }
    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
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
  return {
    onIngredientsInitialize: () => dispatch(actions.ingredientsInitialize()),
    onIngredientAdd: ing => dispatch(actions.addIngredient(ing)),
    onIngredientRemove: ing => dispatch(actions.removeIngredient(ing))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SandwichBuilder);
