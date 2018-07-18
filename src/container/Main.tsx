import React from 'react';
import { bindActionCreators, Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { decrementCount, incrementCount } from '../store/counter/actions';
import { selectCount } from '../store/counter/selector';
import { State } from '../store/rootReducer';

interface MainProps {
  count: number;
  decrementCountAction: () => Action;
  incrementCountAction: () => Action;
}

/* tslint:disable-next-line:variable-name */
const Main = ({ count, decrementCountAction, incrementCountAction }: MainProps) => (
  <div>
    The count is {count}
    <div>
      <button type="button" onClick={decrementCountAction}>
        {'-'}
      </button>
      <button type="button" onClick={incrementCountAction}>
        {'+'}
      </button>
      <Link to="/tomatoes">Go Nowhere</Link>
    </div>
  </div>
);

const mapStateToProps = (state: State) => ({
  count: selectCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      decrementCountAction: decrementCount,
      incrementCountAction: incrementCount,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
