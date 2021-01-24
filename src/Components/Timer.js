import React from "react";
import styles from "./Timer.module.css";

const Timer = (props) => {
  return (
    <div className={styles.SessionContainer}>
      <span className={styles.Header}>Session</span>
      <div>
        <span className={styles.Timer}>{props.minutes} : </span>
        <span className={styles.Timer}>{props.seconds}</span>
      </div>

      <div>
        <button className={styles.Btn}>
          <i className="fas fa-play fa-2x"></i>
        </button>
        <button className={styles.Btn}>
          <i className="fas fa-pause fa-2x"></i>
        </button>
        <button className={styles.Btn}>
          <i className="fas fa-fast-backward fa-2x"></i>
        </button>
      </div>
    </div>
  );
};

export default Timer;
