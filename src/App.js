import { render } from "react-dom";
import { useState, useRef, useEffect } from "react";
import React from "react";
const App = () => {
    const [value, setValue] = useState(null);
    const [currentValue, setCurrentValue] = useState(null);
    const [currentSign, setCurrentSign] = useState("");
    const [screenValue, setScreenValue] = useState(0);
    const screenRef = useRef(null);
    const devideIt = () => {
        setCurrentSign("devide")
        screenRef.current.focus();
        setCurrentValue(screenValue);
        setScreenValue(0);
    }

    const multiplyIt = () => {
        setCurrentSign("multiply")
        screenRef.current.focus();
        setCurrentValue(screenValue);
        setScreenValue(0);
    }

    const minusIt = () => {
        setCurrentSign("minus")
        screenRef.current.focus();
        setCurrentValue(screenValue);
        setScreenValue(0);
    }

    const plusIt = () => {
        setCurrentSign("plus")
        screenRef.current.focus();
        setCurrentValue(screenValue);
        setScreenValue(0);
    }

    const equalTo = () => {
        screenRef.current.focus();
        let result;
        switch (currentSign) {
          case "plus":
            result = value == null ? Number(currentValue) + Number(screenValue) : Number(value) + Number(screenValue);
            break;
          case "minus":
            result = value == null ? currentValue - screenValue : value - screenValue;
            break;
          case "multiply":
            result = value == null ? currentValue * screenValue : value * screenValue;
            break;
          case "devide":
            result = value == null ? currentValue / screenValue : value / screenValue;
            break;
          default:
            result = 0;
        }
        setScreenValue(result);
        setValue(result);
        setCurrentSign("");
      };


    return (
        <div className="calculator">
            <h1 className="heading">Calculator</h1>
            <div className="row">
                <input type="number" ref={screenRef} placeholder={screenValue} className="screen four-quarter" />
            </div>
            <div className="row">
                <button
                    className="button two-quarter-button clear-button"
                    onClick={() => { setScreenValue(0), setValue(null), setCurrentSign("") }}
                >C</button>
                <button
                    className="button quarter-button backspace-button"
                    onClick={() => setScreenValue(Number(screenValue.toString().slice(0, -1)))}
                >&larr;</button>
                <button
                    className="button quarter-button devide-button math-button"
                    onClick={devideIt} 
                >&divide;</button>
            </div>
            <div className="row">
                <button
                    className="button quarter-button seven-button"
                    onClick={(e) => setScreenValue(screenValue == 0 ? "7" : screenValue + "7")}
                >7</button>
                <button
                    className="button quarter-button eight-button"
                    onClick={(e) => setScreenValue(screenValue == 0 ? "8" : screenValue + "8")}
                >8</button>
                <button
                    className="button quarter-button nine-button"
                    onClick={(e) => setScreenValue(screenValue == 0 ? "9" : screenValue + "9")}
                >9</button>
                <button 
                    className="button quarter-button multiply-button math-button"
                    onClick={multiplyIt}
                    >&#215;</button>
            </div>
            <div className="row">
                <button
                    className="button quarter-button four-button"
                    onClick={(e) => setScreenValue(screenValue == 0 ? "4" : screenValue + "4")}
                >4</button>
                <button
                    className="button quarter-button five-button"
                    onClick={(e) => setScreenValue(screenValue == 0 ? "5" : screenValue + "5")}
                >5</button>
                <button
                    className="button quarter-button six-button"
                    onClick={(e) => setScreenValue(screenValue == 0 ? "6" : screenValue + "6")}
                >6</button>
                <button 
                    className="button quarter-button minus-button math-button"
                    onClick={minusIt}
                >&minus;</button>
            </div>
            <div className="row">
                <button
                    className="button quarter-button one-button"
                    onClick={(e) => setScreenValue(screenValue == 0 ? "1" : screenValue + "1")}
                >1</button>
                <button
                    className="button quarter-button tow-button"
                    onClick={(e) => setScreenValue(screenValue == 0 ? "2" : screenValue + "2")}
                >2</button>
                <button
                    className="button quarter-button three-button"
                    onClick={(e) => setScreenValue(screenValue == 0 ? "3" : screenValue + "3")}
                >3</button>
                <button
                    className="button quarter-button plus-button math-button"
                    onClick={plusIt}
                >+</button>
            </div>
            <div className="row">
                <button
                    className="button three-quarter-button zero-button"
                    onClick={(e) => setScreenValue(screenValue == 0 ? "0" : screenValue + "0")}
                >0</button>
                <button className="button quarter-button equal-button math-button"
                    onClick={equalTo}
                >=</button>
            </div>
        </div>

    );
}

render(<App />, document.getElementById("root"));