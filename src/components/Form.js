import React, { useState, useEffect } from "react";

const Form = () => {
  const [count, setCount] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  function toggle() {
    setStartTimer(!startTimer);
  }
  function reset() {
    setCount(0);
    setStartTimer(false);
  }
  useEffect(() => {
    let intervalId = null;
    if (startTimer) {
      intervalId = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    } else if (!startTimer && count !== 0) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [startTimer, count]);

  return (
    <>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Task
        </label>
        <textarea
          className="form-control"
          id="myBox"
          value={count}
          rows="8"
        ></textarea>
      </div>
      <button
        className="btn btn-primary mx-2"
        onClick={() => setCount(count + 1)}
      >
        Increment-Number
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => setCount(count - 1)}
      >
        Decrement-Number
      </button>
      <button
        className={`btn btn-primary mx-2 ${startTimer ? "start" : "stop"}`}
        onClick={toggle}
      >
        Increment-Auto
      </button>
      <button className="btn btn-primary mx-2" onClick={reset}>
        Reset
      </button>
    </>
  );
};

export default Form;
