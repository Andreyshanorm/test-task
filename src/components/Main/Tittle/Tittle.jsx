import React, { useState } from "react";
import valentinImage from "../../../images/Valentin.png";
import kseniaImage from "../../../images/personal/shutterstock_16147704551Ksenia.png";
import styles from "./Tittle.module.css";
import leftIconActive from "../../../icons/left-active.svg";
import rightIconActive from "../../../icons//right-Active.svg";


export const Tittle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tittles = [
    {
      text: "У тебя всё под контролем",
      name: "Ксения",
      position: "товаровед",
      src: kseniaImage,
    },
    {
      text: "У тебя к этому талант",
      name: "Валентин",
      position: "пекарь",
      src: valentinImage,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tittles.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + tittles.length) % tittles.length
    );
  };

  return (
    <div className={styles.talent_card}>
      <div className={styles.text_section}>
        <h1>{tittles[currentIndex].text}</h1>
        <div className={styles.controls}>
          <button type='button' onClick={handlePrev}><img src={rightIconActive} alt="Вправо" /></button>
          <button type='button' onClick={handleNext}><img src={leftIconActive} alt="Вправо" /></button>
          <span className={styles.line}></span>
        </div>
      </div>
      <div className={styles.image_section}>
        <div className={styles.talent_image_container}>
          <img
            src={tittles[currentIndex].src}
            alt="Валентин"
            className={styles.talent_image}
          />
        </div>
        <span className={`${styles.label} ${styles.baker}`}>
          {tittles[currentIndex].name}
        </span>
        <span className={`${styles.label} ${styles.name}`}>
          {tittles[currentIndex].position}
        </span>
      </div>
    </div>
  );
};
