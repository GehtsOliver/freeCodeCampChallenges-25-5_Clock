import "./App.css";

import Control from "./Components/Control";
import Timer from "./Components/Timer";
import tomato from "./tomato.svg";

import React, { useState, useEffect } from "react";

const App = () => {
  const [sessionLength, setSessionLength] = useState(25),
    [breakLength, setBreakLength] = useState(5),
    [timer, setTimer] = useState(1500),
    [interval, setIntervalState] = useState(null),
    [countingActive, setCountingActive] = useState(false),
    [timerMode, setTimerMode] = useState("Session");

    // Play audio file (when timer reaches 0)
  const playAudio = () => {
    const audio = document.getElementById("beep");
    audio.play();
  };

  // Stop audio and rewind to the beginning
  const pauseAudio = () => {
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };


  useEffect(() => {
    if (timer > 0) {
      return;
    }
    if (timer === 0 && timerMode === "Session") {
      setCountingActive(false);
      setTimerMode("Break");
      setCountingActive(true);
      playAudio();
      setTimeout(() => pauseAudio(), 3000);
      return;
    } else if (timer === 0 && timerMode === "Break") {
      setCountingActive(false);
      setTimerMode("Session");
    }
    // eslint-disable-next-line
  }, [timer]);


  // Update timer whenever timerMode(timer reaches 0 and changes mode e.g. from session to break) is changed
  useEffect(
    () => {
      switch (timerMode) {
        case "Session": {
          return setTimer(sessionLength * 60);
        }
        case "Break": {
          return setTimer(breakLength * 60);
        }
        default:
          setTimer(sessionLength * 60);
      }
    },
    // eslint-disable-next-line
    [timerMode],
    []
  );

  // Update timer with appropriate seconds on change of session length
  useEffect(() => {
    setTimer(sessionLength * 60);
  }, [sessionLength]);

  //  Stop and start timer on play/stop click
  useEffect(() => {
    if (countingActive && !interval) {
      setIntervalState(
        setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000)
      );
    } else if (!countingActive) {
      clearInterval(interval);
      setIntervalState(null);
    }
    // eslint-disable-next-line
  }, [countingActive]);

  return (
    <div className="App">
      <section className="Card">
        <h1 style={{ fontSize: "2rem", marginBottom: 0 }}>Pomodoro Timer</h1>
        <div>
          <Control
            setBreak={setBreakLength}
            name="Break"
            length={breakLength}
          />
          <Control
            setSession={setSessionLength}
            name="Session"
            length={sessionLength}
          />
        </div>
        <Timer
          sessionLength={sessionLength}
          setSessionLength={setSessionLength}
          breakLength={breakLength}
          setBreakLength={setBreakLength}
          interval={interval}
          setIntervalState={setIntervalState}
          setTimer={setTimer}
          countingActive={countingActive}
          setCountingActive={setCountingActive}
          timer={timer}
          timerMode={timerMode}
          setTimerMode={setTimerMode}
          pauseAudio={pauseAudio}
        />
        <img
          style={{ padding: "1rem" }}
          className="Tomato"
          alt="A yummy tomato"
          src={tomato}
        />
      </section>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
};

export default App;
