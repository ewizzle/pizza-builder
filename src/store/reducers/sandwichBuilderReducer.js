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

const addIngredient = () => {
  return updateObject();
};

const removeIngredient = () => {
  return updateObject();
};

const setIngredients = () => {
  return updateObject();
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.ADD_INGREDIENT: return addIngredient(state,action);
    case types.REMOVE_INGREDIENT: return removeIngredient(state,action);
    case types.SET_INGREDIENTS: return setIngredients(state,action);
    default: return state;
  }
};

export default reducer;