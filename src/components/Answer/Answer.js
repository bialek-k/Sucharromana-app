import React from "react";
import classes from "./Answer.module.css";
import Photo from "../../assets/png/photo_hero.png";

import { useSelector } from "react-redux";

const Answer = () => {
  const showAnswer = useSelector((state) => state.question.showAnswer);
  const randomJoke = useSelector((state) => state.question.randomJoke);

  return (
    <div className={classes.wrapper}>
      {showAnswer && (
        <div className={classes.answer}>
          <svg
            width="536"
            height="407"
            viewBox="0 0 536 407"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M451.276 310.466C503.422 277.716 536 231.156 536 179.5C536 80.3649 416.012 0 268 0C119.988 0 0 80.3649 0 179.5C0 278.635 119.988 359 268 359C310.697 359 351.061 352.313 386.887 340.416L526.585 406.344L451.276 310.466Z"
              fill="white"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fontSize="2.3rem"
              dy="-.3em"
              fontWeight="600"
              fill="black"
            >
              {randomJoke.answer}
            </text>
          </svg>
          <div className={classes.photo}>
            <img src={Photo} alt="photo_hero" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Answer;
