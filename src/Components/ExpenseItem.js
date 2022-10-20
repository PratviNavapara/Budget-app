import React from "react";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import Typography from "@mui/material/Typography";
import CakeSharpIcon from "@mui/icons-material/CakeSharp";
import ReplaySharpIcon from "@mui/icons-material/ReplaySharp";
import HouseSharpIcon from "@mui/icons-material/HouseSharp";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CommuteIcon from "@mui/icons-material/Commute";
const ExpenseItem = ({ handleExpenseRadio, status, radioHandler }) => {
  return (
    <div className="type">
      <div className="type-tab">
        <input
          type="radio"
          name="radio"
          id="income"
          defaultChecked={status === 1}
          onClick={() => radioHandler(1)}
        />
        <label htmlFor="income">Income</label>

        <input
          type="radio"
          name="radio"
          id="expense"
          flag="2"
          defaultChecked={status === 2}
          onClick={() => radioHandler(2)}
        />
        <label htmlFor="expense">Expense</label>
        <div className="type-color"></div>
      </div>

      <div className="type-categories">
        <div className="type-categories-inc">
          {status === 1 && (
            <>
              <input
                type="radio"
                name="radio-2"
                id="salary"
                value="Salary"
                onClick={handleExpenseRadio}
              />
              <label htmlFor="salary" className="icon-1">
                <span className="material-icons">
                  <MonetizationOnSharpIcon style={{ height: 35, width: 35 }} />
                </span>
                <Typography>Salary</Typography>
              </label>
              <input
                type="radio"
                name="radio-2"
                id="gift"
                value="Gift"
                onClick={handleExpenseRadio}
              />
              <label htmlFor="gift" className="icon-2">
                <span className="material-icons">
                  <CakeSharpIcon />
                </span>
                <Typography>Gift</Typography>
              </label>
              <input
                type="radio"
                name="radio-2"
                id="refund"
                value="Refund"
                onClick={handleExpenseRadio}
              />
              <label htmlFor="refund" className="icon-3">
                <span className="material-icons">
                  <ReplaySharpIcon />
                </span>
                <Typography>Refund</Typography>
              </label>
            </>
          )}
        </div>

        {status === 2 && (
          <>
            <div className="type-categories-exp">
              <input
                type="radio"
                name="radio-3"
                id="rent"
                value="Rent"
                onClick={handleExpenseRadio}
              />
              <label htmlFor="rent" className="icon-1">
                <span className="material-icons">
                  <HouseSharpIcon />
                </span>
                <Typography>Rent</Typography>
              </label>
              <input
                type="radio"
                name="radio-3"
                id="shopping"
                value="Shopping"
                onClick={handleExpenseRadio}
              />
              <label htmlFor="shopping" className="icon-2">
                <span className="material-icons">
                  <ShoppingBasketIcon />
                </span>
                <Typography>Shopping</Typography>
              </label>
              <input
                type="radio"
                name="radio-3"
                id="transportation"
                value="Transportation"
                onClick={handleExpenseRadio}
              />
              <label htmlFor="transportation" className="icon-3">
                <span className="material-icons">
                  <CommuteIcon />
                </span>
                <Typography>Transport</Typography>
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExpenseItem;
