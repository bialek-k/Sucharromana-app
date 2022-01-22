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
  const [finalJoke, setFinalJoke] = useState(false);
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

  // po znalezeiniuu powtórzonego indeksu trzeba zredukować tablicę IDXArr o ten indeks i skasować duplikateARr.

  useEffect(() => {
    console.log("wyświetlone indeksy: ", idxArr);
    console.log(allJokes[jokeId].question);
    // Zapisz do tablicy duplicateIdsArr powtórzone ID
    const duplicateId = idxArr.filter((el, id, arr) => arr.indexOf(el) !== id);
    // jeśli duplicateId nie jest pusta zapisz do stanu duplicateIdsArr powtórzone ID
    if (duplicateId.length) {
      console.log("POWTÓRZONY: ", duplicateId);
      // wylosuj nowy ID
      console.log("          ");
      console.log("NOWE LOSOWANIE");
      setJokeId(Math.floor(Math.random() * allJokes.length));

      // Zapisz powtórzony ID do stanu
      setDuplicateIdsArr([...duplicateIdsArr, ...duplicateId]);
      // sprawdź czy nowy ID się nie potwtórzył, jeśli tak to wywołaj kolejny

      if (idxArr.some((item) => [jokeId].includes(item))) {
        console.log("juz jest");
        console.log("NOWE LOSOWANIE");
        setJokeId(Math.floor(Math.random() * allJokes.length));
        // sprawdź czy powtórzone elementy są takie same - jeśli tak, zredukuj tablice
      }
      // usuń ostatnie ID (powtórzone) z tablicy wyników idxArr
      const newIdxArr = [...idxArr];
      newIdxArr.pop();
      setIdxArr(newIdxArr);
      // Wyczyść tablicę powtórzeń
      duplicateId.length = 0;
    }
    if (duplicateIdsArr.length) {
      const duppp = duplicateIdsArr.some((item, id) => {
        return duplicateIdsArr.indexOf(item) !== id;
      });

      if (duppp) {
        const shortDup = [...duplicateIdsArr];
        shortDup.pop();
        setDuplicateIdsArr(shortDup);
        if (duplicateIdsArr.length === allJokes.length) {
          setFinalJoke(true);
          return;
        }
      }
      console.log("Powtórzone Indeksy: ", duplicateIdsArr);
    }

    // sprawdź powtórzenie w tablicy Powtórzonych indeksów:

    console.log("          ");
  }, [idxArr]);

  // wygeneruj randomm number (Math.random) pomiedzy 1 a allJokes.length (move+1),
  // za kazdym kliknieciem w next joke dodaj numer do arraya(usestate)

  if (finalJoke) {
    return <h1>KONIEC GRY</h1>;
  }

  return (
    <div className={classes.question}>
      <h1>{allJokes[jokeId].question} </h1>
      <div>
        <ul>
          {duplicateIdsArr.map((item, id) => {
            return <li key={id}>{item}</li>;
          })}
        </ul>
      </div>
      <div className={classes.btn}>
        <Button name={"odpowiedź"} onClick={showAnswerHandler} size />
        {/* {showAnswer && ( */}
        <>
          <Button name={"(Next.js) suchar"} onClick={nextJokeHandler} />
          <Button
            href={allJokes[jokeId].url}
            name={`Odcinek ${allJokes[jokeId].answer ?? "hehe"} `}
          />
        </>
        {/* )} */}
      </div>
    </div>
  );
};

export default Question;
