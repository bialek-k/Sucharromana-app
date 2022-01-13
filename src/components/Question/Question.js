import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { jokesActions } from "../../store/jokes-slice";
import { Howl, Howler } from "howler";

import Button from "../UI/Button/Button";

import classes from "./Question.module.css";
import Jingle from "../../assets/sound/jingle.mp3";
import useFetch from "../../hooks/use-fetch";

const Question = () => {
  const jokes = useSelector((state) => state.jokes.jokes);
  const randomJokeId = useSelector((state) => state.jokes.randomJoke);
  const showAnswer = useSelector((state) => state.jokes.showAnswer);
  const dispatch = useDispatch();

  const showAnswerHandler = () => {
    const sound = new Howl({
      src: Jingle,
    });
    Howler.volume(0.5);
    sound.play();
    setTimeout(() => {
      dispatch(jokesActions.getAnswer());
    }, 1300);
  };

  const randomizeJoke = () => {
    const randomId = Math.floor(Math.random() * jokes.length) + 1;
    dispatch(
      jokesActions.setRandomJokeId({
        randomId: randomId,
      })
    );
    console.log(randomId);
  };

  randomizeJoke();

  const randomJoke = jokes[randomJokeId];

  // const nextQuestionHandler = () => {
  //   fetchJoke();
  //   dispatch(questionActions.getAnswer());
  // };

  return (
    <div className={classes.question}>
      <h1>{randomJoke.question}</h1>
      <div className={classes.btn}>
        <Button name={"odpowiedź"} onClick={showAnswerHandler} size />
        {showAnswer && (
          <>
            <Button name={"(Next.js) suchar"} />
            <Button href={randomJoke.url} name={`Odcinek ${randomJoke.id}`} />
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
