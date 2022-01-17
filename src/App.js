import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import Faq from "./components/Faq/Faq";
import classes from "./App.module.css";

import { useSelector } from "react-redux";
import useFetch from "./hooks/use-fetch";

function App() {
  const faqIsVisible = useSelector((state) => state.faq.faqIsVisible);
  const idxFromStore = useSelector((state) => state.sort.selectedIdx);
  const randomJoke = useSelector((state) => state.question.randomJoke);
  const { fetchJoke, loaded } = useFetch();

  useEffect(() => {
    fetchJoke();
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
