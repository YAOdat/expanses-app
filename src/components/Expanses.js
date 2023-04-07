import React, { useState } from 'react';
import './expanses.css';
import Budget from './Budget';

const Expenses = () => {
  const [expenseList, setExpenseList] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);

  const addExpense = () => {
    console.log('expenseName:', expenseName);
    console.log('expenseAmount:', expenseAmount);
    console.log('expenseList:', expenseList);
    const newExpense = {
      name: expenseName,
      amount: expenseAmount,
      date: new Date().toLocaleDateString(),
    };
    setExpenseList([...expenseList, newExpense]);
    setExpenseName('');
    setExpenseAmount(0);
  };

  return (
    <div className="expenses-container">
      <h2 className="expenses-heading">Expenses</h2>
      <div className="expenses-inputs">
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          placeholder="Expense name"
          className="expense-name-input"
        />
        <input
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          placeholder="Expense amount"
          className="expense-amount-input"
        />
        <button onClick={addExpense} className="add-expense-btn">Add Expense</button>
      </div>
      <table className="expenses-table">
        <thead>
          <tr>
            <th className="expense-name-heading">Expense Name</th>
            <th className="expense-amount-heading">Expense Amount</th>
            <th className="expense-date-heading">Date</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Budget expenseList={expenseList} />

    </div>
  );
};

export default Expenses;
