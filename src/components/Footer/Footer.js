import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.container}>
        <p>
          wszystkie suchary pochodzą z kanału Yotube{" "}
          <a href="https://www.youtube.com/c/helloroman">Hello Roman</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
