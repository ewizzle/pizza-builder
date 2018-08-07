import axios from '../../axios-orders';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';

export function* ingredientsInitializeSaga() {
  try{ 
    const response = yield axios.get('/ingredients.json');
    console.log('this is the axios response: ',response.data);
    yield put(actions.setIngredients(response.data));
  } catch(error) {
    yield put(actions.fetchIngredientsFailed(error));
  }
};