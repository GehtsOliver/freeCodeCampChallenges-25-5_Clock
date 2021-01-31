import React from "react";
import styles from "./Control.module.css";

const Control = ({ setBreak, name, length, setSession }) => {
  const incrementHandler = () => {
    name === "Break"
      ? setBreak((prevBreak) => prevBreak < 60 ? prevBreak + 1 : prevBreak)
      : setSession((prevSession) =>
          prevSession < 60 ? prevSession + 1 : prevSession
        );
  };

  const decrementHandler = () => {
    name === "Break"
      ? setBreak((prevBreak) => prevBreak > 1 ? prevBreak - 1 : prevBreak)
      : setSession((prevSession) => prevSession > 1 ? prevSession - 1 : prevSession);
  };

  return (
    <div className={styles.Control}>
      <h3
        id={name === "Break" ? "break-label" : "session-label"}
        className={styles.Header}
      >
        {name} Length
      </h3>
      <div className={styles.ControlElement}>
        <button
          id={name === "Break" ? "break-decrement" : "session-decrement"}
          onClick={decrementHandler}
          className={styles.Btn}
        >
          <i className="fas fa-arrow-down fa-2x"></i>
        </button>
        <h2
          id={name === "Break" ? "break-length" : "session-length"}
          className={styles.Header2}
        >
          {length}
        </h2>
        <button
          id={name === "Break" ? "break-increment" : "session-increment"}
          onClick={incrementHandler}
          className={styles.Btn}
        >
          <i className="fas fa-arrow-up fa-2x"></i>
        </button>
      </div>
    </div>
  );
};

export default Control;
