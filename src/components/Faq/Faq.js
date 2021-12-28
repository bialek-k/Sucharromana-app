import classes from "./Faq.module.css";

import photo from "../../assets/png/author.jpg";

import { useDispatch } from "react-redux";
import { faqActions } from "../../store/index";

const Faq = () => {
  const dispatch = useDispatch();

  const backdropHandler = () => {
    dispatch(faqActions.showFaq());
  };

  return (
    <>
      <div className={classes.modal} onClick={backdropHandler}>
        <div className={classes.container}>
          <div className={classes.photo}>
            <img src={photo} alt="zdjęcie autora" />
          </div>
          <div className={classes.desc}>
            <h1>To moja wina...</h1>
            <p>
              Na początku miałem plan spisać wszystkie suchary Romana do
              notatnika, ale później pomyślałem, że skoro uczę się frontendu to
              mam fajny pomysł na kolejną aplikację :)
            </p>
            <div className={classes.link}>
              <a href="https://github.com/bialek-k">coś o mnie</a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.backdrop}></div>
    </>
  );
};

export default Faq;
