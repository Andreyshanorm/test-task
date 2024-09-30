import React from 'react'
import styles from './Header.module.css';
import { Logo } from './Logo/Logo';


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo/>
        <span className={styles.logo_text}>гросс маркет</span>
      </div>
      <div className={styles.contact_container}>
        <span className={styles.phone_number}>+7 (926) 433-14-16</span>
        <button className={styles.survey_button}>заполнить анкету</button>
      </div>
    </header>
  )
}
