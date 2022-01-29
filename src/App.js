import { useEffect } from "react";

import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import Faq from "./components/Faq/Faq";
import Final from "./components/Final/Final";
import classes from "./App.module.css";

import { useSelector, useDispatch } from "react-redux";
import useFetch from "./hooks/use-fetch";
import Footer from "./components/Footer/Footer";
import { questionActions } from "./store/question-slice";

function App() {
  const faqIsVisible = useSelector((state) => state.faq.faqIsVisible);
  const endOfJokes = useSelector((state) => state.question.endOfJokes);
  const { data, dataIsLoaded, randomIds, error } = useFetch();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length) {
      dispatch(
        questionActions.getAllJokes({
          allJokes: data,
        })
      );
      dispatch(
        questionActions.setRandomJokesId({
          randomJokesId: randomIds,
        })
      );
    }
  }, [data]);

  if (endOfJokes) {
    return <Final />;
  }

  return (
    <div className={classes.wrapper}>
      {faqIsVisible && <Faq />}
      <>
        {dataIsLoaded && (
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
