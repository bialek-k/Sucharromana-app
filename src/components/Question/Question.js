import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Howl, Howler } from "howler";

import Button from "../UI/Button/Button";

import classes from "./Question.module.css";
import Jingle from "../../assets/sound/jingle.mp3";
import { questionActions } from "../../store/question-slice";

const Question = () => {
  const allJokes = useSelector((state) => state.question.allJokes);
  const showAnswer = useSelector((state) => state.question.showAnswer);
  const endOfJokes = useSelector((state) => state.question.endOfJokes);
  const randomStoreIds = useSelector((state) => state.question.randomJokesId);
  const [final, setFinal] = useState(false);
  const [count, setCount] = useState(0);
  const [jokeId, setJokeId] = useState(randomStoreIds[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(count + 1);
  }, []);

  const showAnswerHandler = () => {
    const sound = new Howl({
      src: Jingle,
    });
    Howler.volume(0.5);
    sound.play();
    setTimeout(() => {
      dispatch(questionActions.getAnswer());
      dispatch(
        questionActions.setJokeId({
          jokeId: jokeId,
        })
      );
    }, 1300);
  };

  const nextJokeHandler = () => {
    if (count !== randomStoreIds.length) {
      dispatch(questionActions.getAnswer());
      setCount((prevCount) => count + 1);
      setJokeId(randomStoreIds[count]);
    } else {
      dispatch(questionActions.setEndOfJokes());
    }
  };

  return (
    <div className={classes.question}>
      <h1>{allJokes[jokeId].question} </h1>
      <div className={classes.btn}>
        <Button name={"odpowiedź"} onClick={showAnswerHandler} size />
        {showAnswer && (
          <>
            <Button name={"(Next.js) suchar"} onClick={nextJokeHandler} />
            <Button
              href={allJokes[jokeId].url}
              name={`Odcinek ${allJokes[jokeId].id} `}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
