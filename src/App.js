import classes from "./App.module.css";
import { useEffect } from "react";

import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import Footer from "./components/Footer/Footer";
import Final from "./components/Final/Final";

import { useSelector, useDispatch } from "react-redux";
import { getInitialData } from "./store/question-slice";

function App() {
  const faqIsVisible = useSelector((state) => state.faq.faqIsVisible);
  const allJokesLength = useSelector((state) => state.question.allJokes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      {faqIsVisible && <Faq />}
      <>
        {allJokesLength.length && (
          <>
            <Header />
            <Question />
            <Answer />
            <Footer />
          </>
        )}
      </>
    </div>
  );
}

export default App;
