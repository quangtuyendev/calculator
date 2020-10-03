import React, { useEffect, useRef, useState } from 'react';
import { formatLengthNumber, isInterger } from '../../utils';
import './index.css';

function Calculator() {
  const initialValue = '0';
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(initialValue);
  const [showAlert, setShowAlert] = useState(false);
  const inputRef = useRef();

  /* Get user's input function */
  function handleChange({ target: { value } }) {
    setInput((input !== initialValue ? input : '') + value);
    console.log((input !== initialValue ? input : '') + value);
  }

  /* Change input data function */
  function handleInputChange({ target: { value } }) {
    setInput(value);
  }

  /* Calculator function */
  function handleCalc() {
    try {
      const formatInput = input.replace(/[^-()\d/*+.]/g, '');
      const result = eval(formatInput);
      if (!isInterger(result)) {
        /* Rounding numbers to 3 digits after comma */
        return setOutput(formatLengthNumber(result.toFixed(3)));
      }
      setShowAlert(false);
      setOutput(formatLengthNumber(result));
    } catch (error) {
      setShowAlert(true);
    }
  }

  function handleCalcOnEnter({ keyCode }) {
    /* Press enter key  */
    if (keyCode === 13) {
      handleCalc();
    }
  }

  /* Clean up form function */
  function handleCleanUpForm() {
    setInput(initialValue);
    setOutput(initialValue);
    setShowAlert(false);
  }

  /* Handle remove last value */
  function handleDelForm() {
    const newInput = input.slice(0, input.length - 1);
    setInput(newInput || initialValue.toString());
  }

  function handleRemoveAlert() {
    setShowAlert(false);
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="container">
      <div className="calc-body">
        <div className="calc-screen">
          <input
            placeholder={initialValue}
            ref={inputRef}
            className="calc-operation"
            onChange={handleInputChange}
            value={input}
            onKeyUp={handleCalcOnEnter}
          />
          <div className="calc-typed">
            {output}
            <span className="blink-me"> =</span>
          </div>
        </div>
        {showAlert ? (
          <div className="alert alert_danger" style={{ animationDelay: '.0s' }}>
            <div className="alert--icon">
              <i className="las la-exclamation-circle" />
            </div>
            <div className="alert--content">Máy không hiểu :))</div>
            <div className="alert--close">
              <i onClick={handleRemoveAlert} className="las la-window-close" />
            </div>
          </div>
        ) : null}
        <div className="calc-button-row">
          <input
            onClick={handleCleanUpForm}
            type="button"
            style={{ paddingLeft: 14 }}
            value="AC"
            className="button c"
          />
          <input
            onClick={handleDelForm}
            type="button"
            value="DEL"
            style={{ paddingLeft: 8 }}
            className="button l"
          />
          <input
            type="button"
            onClick={handleChange}
            value=" % "
            className="button l"
          />
          <input
            type="button"
            onClick={handleChange}
            value=" / "
            className="button l"
          />
        </div>
        <div className="calc-button-row">
          <input
            type="button"
            onClick={handleChange}
            value="7"
            className="button"
          />
          <input
            type="button"
            onClick={handleChange}
            value="8"
            className="button"
          />
          <input
            type="button"
            onClick={handleChange}
            value="9"
            className="button"
          />
          <input
            type="button"
            onClick={handleChange}
            value=" * "
            className="button l"
          />
        </div>
        <div className="calc-button-row">
          <input
            type="button"
            onClick={handleChange}
            value="4"
            className="button"
          />
          <input
            type="button"
            onClick={handleChange}
            value="5"
            className="button"
          />
          <input
            type="button"
            onClick={handleChange}
            value="6"
            className="button"
          />
          <input
            type="button"
            onClick={handleChange}
            value=" - "
            className="button l"
          />
        </div>
        <div className="calc-button-row">
          <input
            type="button"
            onClick={handleChange}
            value="1"
            className="button"
          />
          <input
            type="button"
            onClick={handleChange}
            value="2"
            className="button"
          />
          <input
            type="button"
            onClick={handleChange}
            value="3"
            className="button"
          />
          <input
            type="button"
            onClick={handleChange}
            value=" + "
            className="button l"
          />
        </div>
        <div className="calc-button-row">
          <input
            type="button"
            onClick={handleChange}
            value="."
            className="button"
          />
          <input
            type="button"
            onClick={handleChange}
            value="0"
            className="button"
          />
          <input
            type="button"
            onClick={handleChange}
            value="&lt;"
            className="button"
          />
          <input
            type="button"
            onClick={handleCalc}
            value="="
            className="button l"
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
