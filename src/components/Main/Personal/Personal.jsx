import React, { useEffect, useRef, useState } from "react";
import "./Personal.css";
import { personalData } from "./personalData";
import leftIconActive from "../../../icons/left-active.svg";
import leftIconInActive from "../../../icons/left-inActive.svg";
import rightIconActive from "../../../icons//right-Active.svg";
import rigthIconInActive from "../../../icons/right-inActive.svg"
import { ContentContainer } from "../../ContentContainer/ContentContainer";
import { PersonalCard } from "./PersonalCard/PersonalCard";

export const Personal = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(scrollRef.current.scrollLeft);
    };

    const refCurrent = scrollRef.current;
    refCurrent.addEventListener("scroll", handleScroll);

    return () => refCurrent.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;

    console.dir(current);

    if (direction === "left") {
      current.scrollLeft -= 500;
    } else {
      current.scrollLeft += 500;
    }
  };

  const totalScrollWidth = scrollRef.current
    ? scrollRef.current.scrollWidth
    : 0;
  const clientWidth = scrollRef.current ? scrollRef.current.clientWidth : 0;
  const maxScrollPosition = totalScrollWidth - clientWidth;

  const leftButtonState = scrollPosition > 0 
  const rightButtonState = scrollPosition < maxScrollPosition 

  return (
    <ContentContainer>
      <div className="personal_header">
        <h2 className="personal_tittle">Вакансии в гросс маркете</h2>
        <div className="buttons_block">
          <button
            onClick={() => scroll("left")}
            
            className="personal_btn leftButton"
          >
            <img src={leftButtonState ? rightIconActive : rigthIconInActive} alt="Вправо" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="personal_btn rightButton"
          >
            <img src={rightButtonState ? leftIconActive : leftIconInActive} alt="Вправо" />
          </button>
        </div>
      </div>

      <div className="scroll-container" ref={scrollRef}>
        {personalData.map((item, index) => (
          <PersonalCard
            id={index}
            jobName={item.jobName}
            img={item.img}
            desc={item.desc}
            isHoverable={true}
          />
        ))}
      </div>
    </ContentContainer>
  );
};
