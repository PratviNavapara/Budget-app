import React, { useState, useEffect } from "react";
import "../src/App.css";
import Header from "./Components/Header";
import ExpenseItem from "./Components/ExpenseItem";
import TransactionList from "./Components/TransactionList";
import Calculator from "./Components/Calculator";

const App = () => {
  var totalBalance = 0;
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [transaction, setTransaction] = useState([]);
  const [item, setItem] = useState("");
  const [status, setStatus] = useState(1);
  const [amount, setAmount] = useState("");

  const handleDigit = (event) => {
    setAmount(amount + event.target.value);
  };

  const handleBackSpace = () => {
    setAmount("");
  };
  const handleID = () => {
    if (transaction.length > 0) {
      let lastElement = transaction[transaction.length - 1];
      return lastElement.id + 1;
    }
    return 1;
  };

  const radioHandler = (status) => {
    setStatus(status);
  };
  const removeData = (index) => {
    setTransaction(() =>
      transaction.filter((exp) => {
        return exp.id !== index;
      })
    );
  };

  var income = [],
    expense = [];
  const addData = () => {
    if (!amount) {
      return;
    }
    transaction.push({
      flag: status === 1 ? 1 : 2,
      id: handleID(),
      amount: +amount,
      item: item,
    });
    setAmount("");
  };
  transaction.map((flg) => {
    if (flg.flag === 1) {
      income.push(flg.amount);
    } else {
      expense.push(flg.amount);
    }
    return;
  });

  useEffect(() => {
    setTotalIncome(() => income.reduce((x, y) => x + y, 0));
    setTotalExpense(() => expense.reduce((x, y) => x + y, 0));
  }, [income, expense]);

  totalBalance = totalIncome - totalExpense;

  const handleExpenseRadio = (e) => {
    setItem(e.target.value);
  };
  return (
    <>
      <div className="app">
        <div className="container">
          <Header
            totalIncome={totalIncome}
            totalExpense={totalExpense}
            totalBalance={totalBalance}
          />
          <TransactionList
            transaction={transaction}
            removeData={removeData}
            status={status}
          />
        </div>
        <div className="container">
          <ExpenseItem
            handleExpenseRadio={handleExpenseRadio}
            radioHandler={radioHandler}
            status={status}
          />
          <Calculator
            addData={addData}
            amount={amount}
            handleDigit={handleDigit}
            handleBackSpace={handleBackSpace}
          />
        </div>
      </div>
    </>
  );
};
export default App;
