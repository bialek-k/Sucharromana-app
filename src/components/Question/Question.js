import classes from "./Question.module.css";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../../store/question-slice";
import { Howl, Howler } from "howler";

import Button from "../UI/Button/Button";
import Speaker from "../Speaker/Speaker";

import Jingle from "../../assets/sound/jingle.mp3";

const Question = () => {
  const [disabled, setDisabled] = useState(false);
  const [sound, setSound] = useState(true);
  const allJokes = useSelector((state) => state.question.allJokes);
  const showAnswer = useSelector((state) => state.question.showAnswer);
  const currentJokeIndex = useSelector(
    (state) => state.question.currentJokeIndex
  );
  const dispatch = useDispatch();

  const soundHandler = () => {
    setSound((prevState) => !prevState);
  };

  const showAnswerHandler = () => {
    setDisabled(true);
    if (disabled) {
      return;
    }

    const action = () => {
      dispatch(questionActions.toggleShowAnswer());
      setDisabled(false);
    };

    if (sound) {
      const sound = new Howl({
        src: Jingle,
      });
      Howler.volume(0.5);
      sound.play();
      setTimeout(() => {
        action();
      }, 1300);
    } else {
      action();
    }
  };

  const nextJokeHandler = () => {
    if (currentJokeIndex !== allJokes.length) {
      dispatch(questionActions.toggleShowAnswer());
      dispatch(questionActions.nextJoke());
    } else {
      dispatch(questionActions.reload());
    }
  };

  return (
    <div className={classes.question}>
      <Speaker sound={sound} onSoundChange={soundHandler} />
      <h1>{allJokes[currentJokeIndex].question} </h1>
      <div className={classes.btn}>
        <Button name={"odpowiedź"} onClick={showAnswerHandler} size />
        {showAnswer && (
          <>
            <Button name={"(Next.js) suchar"} onClick={nextJokeHandler} />
            <Button
              href={allJokes[currentJokeIndex].url}
              name={`Odcinek ${allJokes[currentJokeIndex].id} `}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
