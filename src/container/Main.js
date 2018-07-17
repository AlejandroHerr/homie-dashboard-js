import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { decrementCount, incrementCount } from '../store/counter/actions';
import { selectCount } from '../store/counter/selector';

const Main = ({ count, decrementCountAction, incrementCountAction }) => (
  <div>
    The count is
    {' '}
    {count}
    <div>
      <button type="button" onClick={decrementCountAction}>
        {'-'}
      </button>
      <button type="button" onClick={incrementCountAction}>
        {'+'}
      </button>
      <Link to="/tomatoes">
Go Nowhere
</Link>
    </div>
  </div>
);

Main.propTypes = {
  count: PropTypes.number.isRequired,
  decrementCountAction: PropTypes.func.isRequired,
  incrementCountAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: selectCount(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  decrementCountAction: decrementCount,
  incrementCountAction: incrementCount,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
