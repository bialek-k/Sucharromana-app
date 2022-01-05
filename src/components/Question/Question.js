import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../../store/question-slice";
import { Howl, Howler } from "howler";

import Button from "../UI/Button/Button";

import classes from "./Question.module.css";
import Jingle from "../../assets/sound/jingle.mp3";

const Question = () => {
  const randomJoke = useSelector((state) => state.question.joke);
  const showAnswer = useSelector((state) => state.question.showAnswer);
  const dispatch = useDispatch();

  const showAnswerHandler = () => {
    const sound = new Howl({
      src: Jingle,
    });
    Howler.volume(0.5);
    sound.play();
    setTimeout(() => {
      dispatch(questionActions.getAnswer());
    }, 1300);
  };

  const nextQuestionHandler = () => {
    dispatch(questionActions.getReload());
    dispatch(questionActions.getAnswer());
  };

  return (
    <div className={classes.question}>
      <h1>{randomJoke.question}</h1>
      <div className={classes.btn}>
        <Button name={"odpowiedź"} onClick={() => showAnswerHandler()} size />
        {showAnswer && (
          <>
            <Button
              name={"(Next.js) suchar"}
              onClick={() => nextQuestionHandler()}
            />
            <Button href={randomJoke.url} name={`Odcinek ${randomJoke.id}`} />
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
