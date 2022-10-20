import React from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Calculator = ({ addData, amount, handleDigit,handleBackSpace }) => {
  

  return (
    <>
      <div className="type-amount1">
        <input
          type="text"
          placeholder="$0.00"
          value={amount}
          className="calc-amount"
          id="result"
          onChange={(e) => e.preventDefault()}
        />
        <button className="type-add">
          <span className="plus-icon" onClick={addData}>
            <AddCircleOutlineIcon style={{ height: 50, width: 50 }} />
          </span>
        </button>
      </div>

      <div className="calc">
        <button className="calc-number" onClick={handleDigit} value="1">
          1
        </button>
        <button className="calc-number" onClick={handleDigit} value="2">
          2
        </button>
        <button className="calc-number" onClick={handleDigit} value="3">
          3
        </button>
        <button className="calc-number" onClick={handleDigit} value="4">
          4
        </button>
        <button className="calc-number" onClick={handleDigit} value="5">
          5
        </button>
        <button className="calc-number" onClick={handleDigit} value="6">
          6
        </button>
        <button className="calc-number" onClick={handleDigit} value="7">
          7
        </button>
        <button className="calc-number" onClick={handleDigit} value="8">
          8
        </button>
        <button className="calc-number" onClick={handleDigit} value="9">
          9
        </button>
        <button
          data-action="decimal"
          onClick={handleDigit}
          value="."
          className="calc-number"
        >
          .
        </button>
        <button className="calc-number" onClick={handleDigit} value="0">
          0
        </button>
        <button className="calc-number" onClick={handleBackSpace}>
          <span className="calc-number">
            <BackspaceIcon />
          </span>
        </button>
      </div>
    </>
  );
};

export default Calculator;
