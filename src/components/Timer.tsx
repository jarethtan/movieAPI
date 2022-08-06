import { useEffect, useState } from "react";
import classes from "./Timer.module.css";

function Timer() {
  const [timeNow, setTimeNow] = useState<number>(0);
  useEffect(() => {
    if (timeNow >= 0) {
      setTimeout(() => setTimeNow(timeNow + 1), 1000);
    }
  }, [timeNow]);

  const dateTime = (time: number): string => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;

    return `${time >= 3600 ? `${hours} hour :` : ""} ${
      time >= 60 ? `${minutes} min : ` : ""
    } ${seconds} sec`; // conditional return for mins and hours
  };

  const dateTimeDuration = dateTime(timeNow);

  return <div className={classes.timer}>{dateTimeDuration}</div>;
}

export default Timer;
