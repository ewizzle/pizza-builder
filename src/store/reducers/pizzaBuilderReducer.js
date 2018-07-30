import * as types from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const INITIAL_STATE = {

};

const addTopping = () => {
  return updateObject();
};

const removeTopping = () => {
  return updateObject();
};

const setToppings = () => {
  return updateObject();
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.ADD_TOPPING: return addTopping(state,action);
    case types.REMOVE_TOPPING: return removeTopping(state,action);
    case types.SET_TOPPINGS: return setToppings(state,action);
    default: return state;
  }
};

export default reducer;