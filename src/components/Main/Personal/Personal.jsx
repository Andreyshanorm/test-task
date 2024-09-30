import React from "react";
import "./Personal.css";
import { personalData } from "./personalData";
import rightIcon from '../../../icons/left-active.svg'
import leftIcon from '../../../icons/right-inActive.svg'
import { ContentContainer } from "../../ContentContainer/ContentContainer";

export const Personal = () => {
  return (
    <ContentContainer>
      <div className="personal_header">
        <h2 className="personal_tittle">Вакансии в гросс маркете</h2>
        <div className="buttons_block">
          <button className="personal_btn leftButton">
            <img src={leftIcon} alt="Вправо" />
          </button>
          <button className="personal_btn rightButton">
            <img src={rightIcon} alt="Вправо" />
          </button>
        </div>
      </div>
      
      <div className="scroll-container">
        {personalData.map((item, index) => (
          <div key={index} className="card">
            <p>{item.jobName}</p>
            <div className="card__container">
              <img className="card_img" src={item.img} alt={item.desc} />
            </div>
          </div>
        ))}
      </div>
    </ContentContainer>
  );
};
