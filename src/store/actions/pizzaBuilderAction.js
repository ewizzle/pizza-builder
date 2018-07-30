import * as types from './actionTypes';

export const addTopping = ( name ) => {
  return {
    type: types.ADD_TOPPING,
    toppingName: name
  };
};

export const removeTopping = ( name ) => {
  return {
    type: types.REMOVE_TOPPING,
    toppingName: name
  };
};

export const setToppings = ( toppings ) => {
  return {
    type: types.SET_TOPPINGS,
    toppings
  };
};

export const fetchToppingsFailed = (error) => {
  return {
    type: types.FETCH_TOPPINGS_FAILED,
    error
  };
};