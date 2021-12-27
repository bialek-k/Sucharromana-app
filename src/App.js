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
