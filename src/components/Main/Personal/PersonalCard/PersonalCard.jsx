import React, { useState } from "react";
import './PersonalCard.css'

export const PersonalCard = ({ jobName, img, desc, id, isHoverable }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (isHoverable) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isHoverable) {
      setIsHovered(false);
    }
  };

  return (
    <div
      className={`card ${isHovered ? 'hoverable' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>{jobName}</p>
      <div className='card_container'>
        {isHovered ? (
          <div className="description">{desc}</div>
        ) : (
          <img src={img} alt={"role"} className='card_img' />
        )}
      </div>
    </div>
  );
};
