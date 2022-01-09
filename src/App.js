import { useEffect } from "react";

import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import Faq from "./components/Faq/Faq";
import classes from "./App.module.css";

import { useSelector } from "react-redux";
import useFetch from "./hooks/use-fetch";

function App() {
  const idxFromStore = useSelector((state) => state.sort.selectedIdx);
  const faqIsVisible = useSelector((state) => state.faq.faqIsVisible);
  const { fetchJoke, loaded, setLoaded } = useFetch();

  useEffect(() => {
    fetchJoke();
  }, []);

  if (loaded) {
    console.log(idxFromStore);
    const duplicateId = idxFromStore.filter(
      (el, id, arr) => arr.indexOf(el) !== id
    );
    if (duplicateId.length > 0) {
      // fetchJoke();
      console.log("POWTÓRZONE:", duplicateId);
    }
  }

  return (
    <div className={classes.wrapper}>
      {faqIsVisible && <Faq />}
      <>
        <Header />
        <Question />
        <Answer />
      </>
    </div>
  );
}

export default App;
