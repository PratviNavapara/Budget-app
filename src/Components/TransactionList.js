import React from "react";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import DeleteIcon from "@mui/icons-material/Delete";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import CakeSharpIcon from "@mui/icons-material/CakeSharp";
import ReplaySharpIcon from "@mui/icons-material/ReplaySharp";
import HouseSharpIcon from "@mui/icons-material/HouseSharp";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CommuteIcon from "@mui/icons-material/Commute";

const TransactionList = ({ transaction, removeData }) => {
  const manageIcons = (props) => {
    switch (props) {
      case "Salary":
        return <MonetizationOnSharpIcon />;
      case "Gift":
        return <CakeSharpIcon />;
      case "Refund":
        return <ReplaySharpIcon />;
      case "Rent":
        return <HouseSharpIcon />;
      case "Shopping":
        return <ShoppingBasketIcon />;
      case "Transportation":
        return <CommuteIcon />;
      default:
        return null;
    }
  };
  return (
    <>
      {transaction.length === 0 && (
        <div className="balance-details">
          <h2>Recent Transactions</h2>
          <div className="balance-empty">
            <span className="icon-loyalty">
              <LoyaltyIcon style={{ fontSize: "100" }} />
            </span>
            <h3>
              Start adding <br />a new transaction
            </h3>
          </div>
        </div>
      )}

      {transaction.length > 0 && (
        <>
          <div className="balance-details">
            <h2>Recent Transactions</h2>
            {transaction.map((data) => {
              return (
                <div key={data.id} className="display-list">
                  <div className="attach-money-icon">
                    {manageIcons(data.item)}
                  </div>
                  <div>{data.item}</div>
                  <div className="trans-amount">
                    <span>{data.flag === 1 ? "+" : "-"}</span>
                    {(data.amount).toFixed(2)}
                  </div>
                  <div
                    className="delete-icon"
                    onClick={() => removeData(data.id)}
                  >
                    <DeleteIcon />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default TransactionList;
