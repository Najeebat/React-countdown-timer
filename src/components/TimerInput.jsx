import React, { useRef, useState, useEffect } from "react";
import { TimerDisplay } from "./TimerDisplay";
import { TimerControl } from "./TimerControl";
import "./Timer.css";

export const TimerInput = () => {
  const hourRef = useRef(null);
  const minutesRef = useRef(null);
  const secondsRef = useRef(null);
  const [display, setDisplay] = useState("Count-down Timer");
  const [total, setTotal] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const totalValue = () => {
    return (
      (Number(hourRef.current.value) || 0) * 3600 +
      (Number(minutesRef.current.value) || 0) * 60 +
      (Number(secondsRef.current.value) || 0)
    );
  };

  const startTimer = () => {
    setTotal(totalValue());
    if (intervalId) clearInterval(intervalId);
    const id = setInterval(() => {
      setTotal((prevTotal) => {
        if (prevTotal <= 0) {
          clearInterval(id);
          setDisplay("Timer Over!");
          return 0;
        } else {
          setDisplay("Timer Started!");
        }
        const newTotal = prevTotal - 1;
        const hr = Math.floor(newTotal / 3600);
        const min = Math.floor((newTotal % 3600) / 60);
        const sec = newTotal % 60;
        hourRef.current.value = hr;
        minutesRef.current.value = min;
        secondsRef.current.value = sec;
        return newTotal;
      });
    }, 1000);
    setIntervalId(id);
  };

  const pauseTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setDisplay("Paused!");
    }
  };

  const resetTimer = () => {
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
    setTotal(0);
    hourRef.current.value = "";
    minutesRef.current.value = "";
    secondsRef.current.value = "";
    setDisplay("Count-down Timer");
  };

  return (
    <div className="container">
      <TimerDisplay display={display} />
      <div className="input-content">
        <input
          type="number"
          placeholder="hr"
          autoComplete="off"
          ref={hourRef}
        />
        <input
          type="number"
          placeholder="min"
          autoComplete="off"
          ref={minutesRef}
        />
        <input
          type="number"
          placeholder="sec"
          autoComplete="off"
          ref={secondsRef}
        />
      </div>
      <TimerControl
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};
