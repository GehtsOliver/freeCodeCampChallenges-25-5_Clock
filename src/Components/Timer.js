import React from "react";
import styles from "./Timer.module.css";

const Timer = ({ pauseAudio, setTimerMode, timerMode, timer, countingActive, setCountingActive, interval, setIntervalState, setSessionLength, setBreakLength, setTimer,   }) => {
  
  const showTimerHandler = () => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  };

  const startStopTimerHandler = () => {
    setCountingActive(!countingActive)
  };

  const resetTimerHandler = () => {
    pauseAudio()
    setSessionLength(25);
    setBreakLength(5);
    setTimer(25*60)
    setTimerMode("Session")
    clearInterval(interval);
    setIntervalState(null);
    setCountingActive(false);
  };


  return (
    <div className={styles.SessionContainer}>
      <span id="timer-label" className={styles.Header}>
        {timerMode}
      </span>
      <div>
        <span id="time-left" className={styles.Timer}>{showTimerHandler()}</span>
      </div>

      <div>
        <button id="start_stop" onClick={startStopTimerHandler} className={styles.Btn}>
          <i className="fas fa-play fa-2x"></i>
          <i className="fas fa-pause fa-2x"></i>
        </button>
        <button id="reset" onClick={resetTimerHandler} className={styles.Btn}>
          <i className="fas fa-fast-backward fa-2x"></i>
        </button>
      </div>
    </div>
  );
};

export default Timer;
