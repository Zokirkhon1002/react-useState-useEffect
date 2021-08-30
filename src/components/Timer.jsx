import React, { useState, useRef, useEffect } from "react";

function setDefaultValue() {
  const userCount = localStorage.getItem("count");
  return userCount ? +userCount : 0;
}

function Timer() {
  const [count, setCount] = useState(setDefaultValue);
  const [isCounting, SetCounting] = useState(false);
  const timerIdRef = useRef(null); // initital state

  const handleStart = () => {
    SetCounting(true);

    timerIdRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerIdRef.current);
    SetCounting(false);
  };

  const handleReset = () => {
    setCount(0);
    SetCounting(false);
  };

  useEffect(() => {
    console.log("Updated");
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    if (isCounting) {
      timerIdRef.current =
        setInterval(() => {
          setCount((prev) => prev + 1);
        }, 1000);
    }

    return () => {
        console.log("WillUnMount");
        timerIdRef.current && clearInterval(timerIdRef.current);
        timerIdRef.current = null;
    }
  }, [isCounting]);

  return (
    <div className="App">
      <p>React timer</p>
      <p className="output">{count}</p>
      <p>{isCounting}</p>
      {!isCounting ? (
        <button className="success" onClick={handleStart}>
          Start
        </button>
      ) : (
        <button className="danger" onClick={handleStop}>
          Stop
        </button>
      )}
      <button className="secondary" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
