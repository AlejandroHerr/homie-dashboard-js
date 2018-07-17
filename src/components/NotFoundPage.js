import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './NotFoundPage.scss';

const Line = ({ index, spacing, time }) => (
  <div
    className={`${styles.line} line-${index}`}
    style={{
      top: `${(index - 1) * spacing + Math.random() * spacing}px`,
      animation: `lines ${Math.random() * time}s infinite`,
    }}
  />
);


export default class NotFoundPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };

    this.updateHeight = this.updateHeight.bind(this);
  }

  componentDidMount() {
    this.updateHeight();
    window.addEventListener('resize', this.updateHeight);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight);
  }

  updateHeight() {
    const height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    this.setState({ height });
  }

  render() {
    const { spacing, time } = this.props;
    const { height } = this.state;

    return (
      <div
        className={styles.container}
      >
        <div className={styles.root}>
          <div data-text="Not found" className={styles.text}>
             Not Found
          </div>
        </div>
        {Array.from(Array(Math.floor(height / spacing)).keys()).map(index => (
          <Line key={index} index={index} spacing={spacing} time={time} />
        ))}
      </div>
    );
  }
}

NotFoundPage.propTypes = {
  spacing: PropTypes.number,
  time: PropTypes.number,
};

NotFoundPage.defaultProps = {
  spacing: 15,
  time: 5,
};
