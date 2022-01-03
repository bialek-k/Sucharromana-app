import { useEffect } from "react";

import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import Faq from "./components/Faq/Faq";

import classes from "./App.module.css";

import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "./store/index";

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
        .then((data) => console.log(data));
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
