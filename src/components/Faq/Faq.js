import React from "react";
import classes from "./Faq.module.css";

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
          <h1>To moja wina...</h1>
          <div className={classes.description}>
            <div className={classes.faqPhoto}></div>
            <p>
              Chciałem zebrać do kupy wszyscie suchary Romana, ale zwykły plik
              .txt byłby zbyt nudny :)
            </p>
            <div className={classes.myLink}>
              <p>Polecam się :) </p>
              <a href="https://github.com/bialek-k/">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 121 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M60.4979 18.8301C40.0155 18.8301 23.4064 35.4313 23.4064 55.9164C23.4064 72.3013 34.0335 86.2024 48.7731 91.1063C50.629 91.4432 51.3053 90.3004 51.3053 89.3191C51.3053 88.4381 51.2711 86.1045 51.2552 83.0106C40.9377 85.2508 38.7608 78.0384 38.7608 78.0384C37.0735 73.7561 34.6415 72.6132 34.6415 72.6132C31.2737 70.3138 34.8966 70.3594 34.8966 70.3594C38.6196 70.6212 40.5779 74.1841 40.5779 74.1841C43.8865 79.8484 49.2604 78.2137 51.3736 77.2667C51.7083 74.8694 52.667 73.2347 53.7258 72.3082C45.4896 71.3702 36.8321 68.1897 36.8321 53.979C36.8321 49.9289 38.278 46.6209 40.6508 44.0278C40.2705 43.0853 38.9953 39.3152 41.0151 34.2087C41.0151 34.2087 44.1302 33.2116 51.2142 38.0107C54.1721 37.1888 57.3464 36.779 60.5002 36.7654C63.6494 36.779 66.8214 37.1888 69.7861 38.0107C76.8679 33.2138 79.9784 34.2087 79.9784 34.2087C82.0027 39.3129 80.7275 43.083 80.3473 44.0278C82.7223 46.6209 84.1591 49.9289 84.1591 53.979C84.1591 68.2262 75.4857 71.3611 67.2221 72.2763C68.5542 73.4237 69.7383 75.6867 69.7383 79.1472C69.7383 84.1057 69.6928 88.1034 69.6928 89.3214C69.6928 90.314 70.36 91.4637 72.2431 91.104C86.9713 86.1911 97.5871 72.299 97.5871 55.9187C97.5917 35.4313 80.9849 18.8301 60.4979 18.8301Z"
                    fill="#181616"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.backdrop}></div>
    </>
  );
};

export default Faq;
