import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import Faq from "./components/Faq/Faq";
import classes from "./App.module.css";

import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "./store/question-slice";

function App() {
  const dispatch = useDispatch();
  const faqIsVisible = useSelector((state) => state.faq.faqIsVisible);
  const [loaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://sucharromana-default-rtdb.firebaseio.com/jokes.json`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const responseData = await response.json();
      const shortResponse = responseData.slice(-3);
      const initialJokeId = Math.floor(Math.random() * shortResponse.length);
      dispatch(
        questionActions.getInitialJokeId({
          initialJokeId: initialJokeId,
        })
      );
      dispatch(
        questionActions.getAllJokes({
          allJokes: shortResponse,
        })
      );
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.wrapper}>
      {faqIsVisible && <Faq />}
      <>
        {loaded && (
          <>
            <Header />
            <Question />
            <Answer />
          </>
        )}
      </>
    </div>
  );
}

export default App;

/*
const duplicateId = idxFromStore.filter((el, id, arr) => arr.indexOf(el) !== id
*/
