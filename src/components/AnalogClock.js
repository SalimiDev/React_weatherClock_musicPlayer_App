import React, { useState } from "react";
import styles from "./AnalogClock.module.css";
const AnalogClock = () => {
  const deg = 6;
  const [time, setTime] = useState({
    hh: "",
    mm: "",
    ss: "",
  });
  setInterval(() => {
    let day = new Date();
    setTime({
      hh: day.getHours() * 30,
      mm: day.getMinutes() * deg,
      ss: day.getSeconds() * deg,
    });
  });

  const { hh, mm, ss } = time;
  return (
    <div className={styles.clock}>
      <div className={styles.hour}>
        <div
          className={styles.hr}
          style={{ transform: `rotateZ(${hh + mm / 12}deg)` }}></div>
      </div>
      <div className={styles.min}>
        <div
          className={styles.mn}
          style={{ transform: `rotateZ(${mm}deg)` }}></div>
      </div>
      <div className={styles.sec}>
        <div
          className={styles.sc}
          style={{ transform: `rotateZ(${ss}deg)` }}></div>
      </div>
    </div>
  );
};

export default AnalogClock;
