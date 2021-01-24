import "./App.css";

import { useState, useEffect } from "react"
import Control from "./Components/Control";
import Timer from "./Components/Timer";
import tomato from "./tomato.svg";

const App = () => {
  const [sessionMinutes, setSessionMinutes] = useState(25),
        [sessionSeconds, setSessionSeconds] = useState("00"),
        [breakLength, setBreakLength] = useState(5);

  const incrementSessionHandler = () =>{
      setSessionMinutes(prevSession => prevSession + 1)
  }

  const decrementSessionHandler = () => {
      setSessionMinutes(prevSession => prevSession - 1)
  }

  const incrementBreakHandler = () => {
      setBreakLength(prevBreak => prevBreak + 1)
  }

  const decrementBreakHandler = () => {
      setBreakLength(prevBreak => prevBreak - 1)
  }

  // const setTimer = () => {
  //   setInterval{

  //   }
  // }


  return (
    <div className="App">
      <section className="Card">
        <h1 style={{ fontSize: "2rem", marginBottom: 0 }}>Pomodoro Timer</h1>
        <div>
          <Control incVal={incrementBreakHandler} decVal={decrementBreakHandler} name="Break" length={breakLength} />
          <Control incVal={incrementSessionHandler} decVal={decrementSessionHandler} name="Session" length={sessionMinutes} />
        </div>
        <Timer minutes={sessionMinutes} seconds={sessionSeconds} />
        <img style={{padding: "1rem"}} className="Tomato" alt="A yummy tomato" src={tomato} />
      </section>
    </div>
  );
};

export default App;
