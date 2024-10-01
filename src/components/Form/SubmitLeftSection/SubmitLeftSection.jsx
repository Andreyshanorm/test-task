import React from 'react'
import styles from './SubmitRightSection.module.css'


export const SubmitLeftSection = () => {
  return (
    <div className={styles.left_section}>
        <h2>Остались вопросы:</h2>
        <div className={styles.tel_container}><span>+7 (926) 433-14-16</span></div>
    </div>
  )
}
