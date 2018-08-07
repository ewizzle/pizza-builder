import { takeEvery } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';

import { ingredientsInitializeSaga } from './sandwichBuilderSaga';

export function* watchSandwichBuilder() {
  yield takeEvery(types.INGREDIENTS_INITIALIZE, ingredientsInitializeSaga);
}
