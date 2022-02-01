import { useState } from "react";
import classes from "./Speaker.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const Speaker = ({ sound, onSoundChange }) => {
  return (
    <FontAwesomeIcon
      icon={sound ? faVolumeUp : faVolumeMute}
      className={classes.speaker}
      onClick={() => onSoundChange()}
    />
  );
};

export default Speaker;
