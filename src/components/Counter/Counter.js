import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

const Counter = () => {
    
  const [val, setVal] = useState({
    inc: 1,
    dec: 1,
  });
  const { count, increment, decrement, setValue, reset } = useCounter();

  const handleChange = (e) => {
    const name = e.target.name;
    setVal((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));

    if (e.target.value) {
      setValue(Number.parseInt(e.target.value), name);
      
    }
  };

  const handleReset = () => {
    reset();
    setVal({
      inc: 1,
      dec: 1,
    });
  };

  return (
    <div className="wrapper">
      <div className="card">
        <p>Counter App</p>
        <h2 className="title">{count}</h2>
        <div className="form">
          <div className="form--field">
            <label htmlFor="increase">Increase Value</label>
            <input
              onChange={handleChange}
              value={val.inc}
              type="number"
              name="inc"
              id="increase"
              min="1"
            />
          </div>
          <div className="form--field">
            <label htmlFor="decrease">Decrease Value</label>
            <input
              onChange={handleChange}
              value={val.dec}
              type="number"
              name="dec"
              id="decrease"
              min="1"
            />
          </div>
          <div className="button-group">
            <button className="btn" onClick={increment}>
              Increase
            </button>
            <button className="btn" onClick={decrement}>
              Decrease
            </button>
          </div>
          <div className="reset--wrapper">
            <button className="btn lg" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
