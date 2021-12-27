import React from "react";
import classes from "./Header.module.css";

import logo from "../../assets/Hello-Roman.png";
import zolte from "../../assets/zolte.jpg";
import ham from "../../assets/png/ham.png";

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
        <img className={classes.yellowLogo} src={zolte} alt="helloroman" />
        <img className={classes.whiteLogo} src={logo} alt="helloroman" />
        <p>sucharromana</p>
      </div>
      <div className={classes.menu}></div>
    </div>
  );
};

export default Header;
