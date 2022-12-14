import React from 'react';
import CountdownTimer from './CountDownTimer';
import TimerComponent from './TimerComponent';

// import './App.css';

export default function App() {
  const THREE_DAYS_IN_MS = 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      {/* <TimerComponent /> */}
    </div>
  );
}
