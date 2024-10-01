import React from "react";
import styles from "./SubmitRightSection.module.css";

export const SumbitRightSection = () => {
  return (
    <div className={styles.right_section}>
      <div className={styles.content}>
        <p>
          В 2020 году самыми востребованными умениями и качествами на рынке
          труда станут:
        </p>
        <p className={styles.caption}>
          Умение ставить цели, планировать свое время, инициативность,
          настойчивость, высокая мотивация, умение эффективно общаться,
          любознательность.
          <span className={styles.line}></span>
        </p>
        <p>А профессиональным навыкам можно научить любого человека.</p>
      </div>
    </div>
  );
};
