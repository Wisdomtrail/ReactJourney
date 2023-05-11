import React, { useState } from "react";
import "../styles/Calculator.css";

function Calculator() {
  const [inputValue, setInputValue] = useState("");

  const handleClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleEqual = () => {
    try {
      const result = eval(inputValue);
      setInputValue(result.toString());
    } catch (error) {
      console.error(error);
      setInputValue("Error");
    }
  };

  return (
    <div className="mainContainer">
      <center>
        <div className="calculator">
          <input className="input" type="text" value={inputValue} />

          <div className="buttons">
            <button className="b1" onClick={() => setInputValue("")}>
              C
            </button>
            <button className="b2" onClick={() => handleClick("%")}>
              %
            </button>
            <button className="b3" onClick={() => handleClick("/")}>
              /
            </button>
            <button className="b4" onClick={() => handleClick("M")}>
              M
            </button>
            <br />
            <button className="b6" onClick={() => handleClick("7")}>
              7
            </button>
            <button className="b6" onClick={() => handleClick("8")}>
              8
            </button>
            <button className="b6" onClick={() => handleClick("9")}>
              9
            </button>
            <button className="b6" onClick={() => handleClick("*")}>
              *
            </button>
            <br />
            <button className="b6" onClick={() => handleClick("4")}>
              4
            </button>
            <button className="b6" onClick={() => handleClick("5")}>
              5
            </button>
            <button className="b6" onClick={() => handleClick("6")}>
              6
            </button>
            <button className="b6" onClick={() => handleClick("-")}>
              -
            </button>
            <br />
            <button className="b7" onClick={() => handleClick("1")}>
              1
            </button>
            <button className="b7" onClick={() => handleClick("2")}>
              2
            </button>
            <button className="b7" onClick={() => handleClick("3")}>
              3
            </button>
            <button className="b7" onClick={() => handleClick("+")}>
              +
            </button>
            <br />
            <button className="b8" onClick={() => handleClick("0")}>
              0
            </button>
            <button className="b8" onClick={() => handleClick(".")}>
              .
            </button>
            <button className="b0" onClick={() => handleEqual()}>
              =
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Calculator;
