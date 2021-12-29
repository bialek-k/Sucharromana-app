import classes from "./Header.module.css";
import Button from "../UI/Button/Button";

import { useDispatch } from "react-redux";
import { faqActions } from "../../store";

const Header = () => {
  const dispatch = useDispatch();

  const showFaqHandler = () => {
    dispatch(faqActions.showFaq());
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <p>sucharromana</p>
        <p className={classes.desc}>fan made project</p>
      </div>
      <div className={classes.menu}>
        <div className={classes.ham}>
          <span className={classes.hamInner}></span>
        </div>
        <div className={classes.normalMenu}>
          <div className={classes.buttons}>
            <Button name={"faq"} onClick={showFaqHandler} menu />
            <Button href={"https://helloroman.pl"} name={"helloroman"} menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
