import { createActions } from 'redux-actions';
import { DECREMENT_COUNT, INCREMENT_COUNT } from './actionTypes';

export const { decrementCount, incrementCount } = createActions({
  [DECREMENT_COUNT]: () => ({ increment: -1 }),
  [INCREMENT_COUNT]: () => ({ increment: 1 }),
});
