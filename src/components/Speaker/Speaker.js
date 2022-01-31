import { useState } from "react";
import classes from "./Speaker.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const Speaker = ({ soundOn, clickHandler }) => {
  const [sound, setSound] = useState(true);

  let icon;
  if (sound) {
    icon = faVolumeUp;
  } else {
    icon = faVolumeMute;
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      className={classes.speaker}
      onClick={() => setSound((prevState) => !prevState)}
    />
  );
};

export default Speaker;
