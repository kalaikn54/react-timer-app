import React, { useState, useRef } from "react";
import "./App.css"; // Import the CSS file

function Timer() {
  const [time, setTime] = useState(0); // State to store the timer value
  const intervalRef = useRef(null); // Ref to store the interval ID

  const startTimer = () => {
    if (intervalRef.current) return; // Avoid multiple intervals
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000); // Increment time every second
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current); // Clear the interval
    intervalRef.current = null; // Reset the interval ref
  };

  const resetTimer = () => {
    pauseTimer(); // Pause the timer
    setTime(0); // Reset time to 0
  };

  return (
    <div className="timer-container">
      <h1 className="timer-display">Timer: {time}s</h1>
      <div className="button-group">
        <button className="timer-button start" onClick={startTimer}>
          Start
        </button>
        <button className="timer-button pause" onClick={pauseTimer}>
          Pause
        </button>
        <button className="timer-button reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
