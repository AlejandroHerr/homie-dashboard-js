import { handleActions } from 'redux-actions';

import { DECREMENT_COUNT, INCREMENT_COUNT } from './actionTypes';
import initialState from './initialState';

export interface CounterState {
  count: number;
}

const counterReducer = handleActions<CounterState, any>(
  {
    [DECREMENT_COUNT]: (state, { payload }) => {
      return { ...state, count: state.count + payload.increment };
    },
    [INCREMENT_COUNT]: (state, { payload }) => {
      return { ...state, count: state.count + payload.increment };
    },
  },
  initialState,
);

export default counterReducer;
