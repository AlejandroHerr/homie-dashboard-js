import { handleActions, combineActions } from 'redux-actions';

import initialState from './initialState';
import { decrementCount, incrementCount } from './actions';

const counterReducer = handleActions({
  [combineActions(decrementCount, incrementCount)](state, { payload }) {
    return { ...state, count: state.count + payload.increment };
  },
}, initialState);

export default counterReducer;
