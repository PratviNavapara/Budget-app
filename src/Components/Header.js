import React from "react";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";

const Header = ({ totalIncome, totalExpense, totalBalance }) => {
  return (
    <>
      <div className="balance">
        <div className="balance-total">
          <h1>Balance</h1>

          <h3>
            <span>$</span>
            <span>{(totalBalance).toFixed(2)}</span>
          </h3>
        </div>
        <div className=" balance-income">
          <div className="balance-group">
            <h3>Income</h3>
            <h3>
              <strong>${(totalIncome).toFixed(2)}</strong>
            </h3>
          </div>
          <span className="icon-income">
            <CallReceivedIcon />
          </span>
        </div>
        <div className=" balance-expense">
          <div className="balance-group">
            <h3>Expenses</h3>
            <h3>
              <strong>$ {(totalExpense).toFixed(2)}</strong>
            </h3>
          </div>
          <span className="icon-expense">
            <CallMadeIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
