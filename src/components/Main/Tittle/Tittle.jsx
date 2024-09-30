import React from 'react'
import valentinImage from '../../../images/Valentin.png'
import styles from './Tittle.module.css'

export const Tittle = () => {
  return (
    <div className={styles.talent_card}>
      <div className={styles.text_section}>
        <h1>У тебя к этому талант</h1>
      </div>
      <div className={styles.image_section}>
        <div className={styles.talent_image_container}>
            <img src={valentinImage} alt="Валентин" className={styles.talent_image} />
        </div>

        <span className={`${styles.label} ${styles.baker}`}>пекарь</span>
        <span className={`${styles.label} ${styles.name}`}>валентин</span>
      </div>
    </div>
  )
}
