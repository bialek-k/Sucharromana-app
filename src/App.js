import { useEffect } from "react";

import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import Faq from "./components/Faq/Faq";

import classes from "./App.module.css";

import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "./store/question-slice";
import { jokeAction } from "./store/joke-slice";

function App() {
  const dispatch = useDispatch();
  const faqIsVisible = useSelector((state) => state.faq.faqIsVisible);

  useEffect(() => {
    const fetchJokes = async () => {
      fetch(
        `https://sucharromana-default-rtdb.firebaseio.com/jokes/${
          Math.floor(Math.random() * 169) + 1
        }.json`
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(
            jokeAction.getFetchJoke({
              id: data.id,
              question: data.question,
              answer: data.answer,
              url: data.url,
            })
          );
        });
    };

    fetchJokes();
  }, []);

  useEffect(() => {
    dispatch(questionActions.getRandomJokes());
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      {faqIsVisible && <Faq />}
      <Header />
      <Question />
      <Answer />
    </div>
  );
}

export default App;
