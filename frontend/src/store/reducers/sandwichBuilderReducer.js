import * as types from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const INITIAL_STATE = {
  ingredients: null,
  totalPrice: 6,
  error: false,
  building: false
};

const INGREDIENT_PRICES = {
  lettuce: 0.6,
  beef: 2.5,
  turkey: 2.0,
  cheese: 0.5,
  tomato: 0.3
};

const addIngredient = ( state, action ) => {
  const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedState);
};

const removeIngredient = ( state, action ) => {
  const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedState);
};

const setIngredients = ( state, action ) => {
  return updateObject(state, {
    ingredients: {
      cheese: action.ingredients.cheese,
      beef: action.ingredients.beef,
      turkey: action.ingredients.turkey,
      lettuce: action.ingredients.lettuce,
      tomato: action.ingredients.tomato
    },
    totalPrice: 6,
    error: false,
    building: false
  });
};

const fetchIngredientsFailed = ( state, action ) => {
  return updateObject(state, { error: true });
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.ADD_INGREDIENT: return addIngredient(state,action);
    case types.REMOVE_INGREDIENT: return removeIngredient(state,action);
    case types.SET_INGREDIENTS: return setIngredients(state,action);
    case types.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state,action);
    default: return state;
  }
};

export default reducer;