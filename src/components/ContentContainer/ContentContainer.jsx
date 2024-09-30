import React from 'react'
import styles from './ContentContainer.module.css'


export const ContentContainer = ({children}) => {
  return (
    <div className={styles.contentContainer}>
        {children}
      </div>
  )
}
