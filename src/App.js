import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import Faq from "./components/Faq/Faq";
import classes from "./App.module.css";

import { useSelector } from "react-redux";

function App() {
  const faqIsVisible = useSelector((state) => state.faq.faqIsVisible);

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
