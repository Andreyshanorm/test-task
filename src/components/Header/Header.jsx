import React from "react";
import styles from "./Header.module.css";
import { ContentContainer } from "../ContentContainer/ContentContainer";
import logo from '../../images/fullIcon.png'
import {useNavigate} from "react-router-dom";
import mobilePhoneIcon from '../../icons/VectorPhone.svg'

export const Header = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/test-task/form');
  };

  return (
    <ContentContainer>
      <header className={styles.header}>
        <div onClick={() => navigate('/test-task')} className={styles.logo}>
          <img src={logo} alt="Логотип" />
          <span className={styles.logo_text}>гросс маркет</span>
        </div>
        <img onClick={handleButtonClick} className={styles.mobile_icon} src={mobilePhoneIcon} alt="Позвонить" />
        <div className={styles.contact_container}>
          <span className={styles.phone_number}>+7 (926) 433-14-16</span>
          <button onClick={handleButtonClick} className={styles.survey_button}>Заполнить анкету</button>
        </div>
      </header>
    </ContentContainer>
  );
};
