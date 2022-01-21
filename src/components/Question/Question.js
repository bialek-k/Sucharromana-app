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
  const initialJokeId = useSelector((state) => state.question.initialJokeId);
  const [duplicateIdsArr, setDuplicateIdsArr] = useState([]);
  const [jokeId, setJokeId] = useState(initialJokeId);
  const [idxArr, setIdxArr] = useState([initialJokeId]);
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

  const nextJokeHandler = () => {
    const nextRandomId = Math.floor(Math.random() * allJokes.length);
    dispatch(questionActions.getAnswer());
    setJokeId(nextRandomId);
    setIdxArr([...idxArr, nextRandomId]);
  };

  useEffect(() => {
    console.log("idxArr: ", idxArr);
    // Zapisz do tablicy duplicateIdsArr powtórzone ID
    const duplicateId = idxArr.filter((el, id, arr) => arr.indexOf(el) !== id);
    // jeśli duplicateId nie jest pusta zapisz do stanu duplicateIdsArr powtórzone ID
    if (duplicateId.length) {
      console.log(duplicateId);
      // wylosuj nowy ID
      setJokeId(Math.floor(Math.random() * allJokes.length));
      // Zapisz powtórzony ID do stanu
      setDuplicateIdsArr([...duplicateIdsArr, ...duplicateId]);
      // usuń ostatnie ID (powtórzone) z tablicy wyników idxArr
      const newIdxArr = [...idxArr];
      newIdxArr.pop();
      setIdxArr(newIdxArr);
    }
    // Wyczyść tablicę powtórzeń
    duplicateId.length = 0;
  }, [idxArr]);

  // wygeneruj randomm number (Math.random) pomiedzy 1 a allJokes.length (move+1),
  // za kazdym kliknieciem w next joke dodaj numer do arraya(usestate)

  return (
    <div className={classes.question}>
      <h1>{allJokes[jokeId].question} </h1>
      <p>{allJokes[jokeId].id}</p>
      <div className={classes.btn}>
        <Button name={"odpowiedź"} onClick={showAnswerHandler} size />
        {showAnswer && (
          <>
            <Button name={"(Next.js) suchar"} onClick={nextJokeHandler} />
            <Button
              href={allJokes[jokeId].url}
              name={`Odcinek ${allJokes[jokeId].answer ?? "hehe"} `}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
