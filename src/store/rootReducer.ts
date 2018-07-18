import { combineReducers } from 'redux';

import counterReducer, { CounterState } from './counter/reducer';

export interface State {
  counter: CounterState;
}

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
