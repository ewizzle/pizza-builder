import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import Sandwich from "../../components/Sandwich/Sandwich";
import Spinner from "../../components/UI/Spinner";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";

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
        <React.Fragment>
          <Sandwich ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdd}
            ingredientRemoved={this.props.onIngredientRemove}
            disabled={disabledInfo}
            price={this.props.price}
            ordered={this.purchaseHandler}
          />
        </React.Fragment>
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
