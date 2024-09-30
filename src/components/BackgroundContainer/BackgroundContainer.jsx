import React from 'react';
import styles from './BackgroundContainer.module.css';

export const BackgroundContainer = ({ children }) => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.contentContainer}>
        {children}
      </div>
    </div>
  );
};