import * as types from './actionTypes';

export const addIngredient = ( name ) => {
  return {
    type: types.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = ( name ) => {
  return {
    type: types.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = ( ingredients ) => {
  return {
    type: types.SET_INGREDIENTS,
    ingredients
  };
};

export const fetchIngredientsFailed = (error) => {
  return {
    type: types.FETCH_INGREDIENTS_FAILED,
    error
  };
};

export const ingredientsInitialize = () => {
  return {
    type: types.INGREDIENTS_INITIALIZE
  };
};