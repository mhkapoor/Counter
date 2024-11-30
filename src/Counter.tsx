import React, { useState, useCallback, useRef } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [Timer, setTimer] = useState(false);
  const interval = useRef(null);

  const handleStart = useCallback(() => {
    if (Timer) {
      setTimer(!Timer);
      clearInterval(interval.current);
      return;
    }
    setTimer(!Timer);
    interval.current = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  }, [counter, Timer]);

  const handleReset = useCallback(() => {
    setTimer(false);
    setCounter(0);
    clearInterval(interval.current);
  }, []);

  return (
    <>
      <div>Count: {counter}</div>
      <button onClick={handleStart}>{Timer ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Counter;
