import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import Faq from "./components/Faq/Faq";
import classes from "./App.module.css";

import { useSelector, useDispatch } from "react-redux";
import { jokesActions } from "./store/jokes-slice";
import useFetch from "./hooks/use-fetch";

function App() {
  const dispatch = useDispatch();
  const [dataLoaded, setDataLoaded] = useState(false);
  const faqIsVisible = useSelector((state) => state.faq.faqIsVisible);
  const { fetchJoke } = useFetch();

  useEffect(() => {
    fetchJoke();
    setDataLoaded(true);
  }, []);

  return (
    <div className={classes.wrapper}>
      {faqIsVisible && <Faq />}
      <>
        {dataLoaded && (
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

// if (loaded) {
//   console.log(idxFromStore);
//   const duplicateId = idxFromStore.filter(
//     (el, id, arr) => arr.indexOf(el) !== id
//   );
//   if (duplicateId.length > 0) {
//     // fetchJoke();
//     console.log("POWTÓRZONE:", duplicateId);
//   }
// }
