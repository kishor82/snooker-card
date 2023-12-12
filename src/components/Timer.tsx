"use client";

import useTimer from "@/hooks/useTimer";
import { formatTime } from "@/utils";
import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  return (
    <div className="app">
      <h3>Stopwatch</h3>
      <div className="stopwatch-card">
        <p>{formatTime(timer)}</p>
        <div className="buttons">
          {!isActive && !isPaused ? (
            <button type="button" onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button type="button" onClick={handlePause}>Pause</button>
          ) : (
            <button type="button" onClick={handleResume}>Resume</button>
          )}
          <button type="button" onClick={handleReset} disabled={!isActive}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
