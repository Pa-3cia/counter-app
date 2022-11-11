import React from "react";
import { useNavigate } from "react-router-dom";
import "../Counter/counter.css";

export default function NotFound() {
    const navigation = useNavigate()

    const handleClick = () => {
        navigation('/')
    }
  return (
    <div className="wrapper">
      <div className="card">
        <div className="notfound">
          <h3>Oops!</h3>
          <p>Sorry, you have wondered too far</p>
        </div>

        <div className="reset--wrapper">
            <button className="btn lg" onClick={handleClick}>
              Go back home
            </button>
          </div>
      </div>
    </div>
  );
}
