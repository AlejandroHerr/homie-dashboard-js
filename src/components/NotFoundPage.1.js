import React from 'react';

import styles from './NotFoundPage.scss';

const NotFoundPage = () => (
  <div className={styles.container}>
    <svg className={styles.svg} viewBox="0 0 600 300">
      <symbol id="sText">
        <text textAnchor="middle" x="50%" y="50%" dy=".35em">
        44 - Not Found
        </text>
      </symbol>
      <use className={styles.svg__text} xlinkHref="#sText" />
      <use className={styles.svg__text} xlinkHref="#sText" />
      <use className={styles.svg__text} xlinkHref="#sText" />
      <use className={styles.svg__text} xlinkHref="#sText" />
      <use className={styles.svg__text} xlinkHref="#sText" />
    </svg>
  </div>
);

export default NotFoundPage;
