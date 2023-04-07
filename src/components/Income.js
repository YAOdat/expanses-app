import React, { useState } from 'react';
import './income.css';
import Budget from './Budget';

const Income = () => {
  const [incomeList, setIncomeList] = useState([]);
  const [incomeName, setIncomeName] = useState('');
  const [incomeAmount, setIncomeAmount] = useState(0);

  const addIncome = () => {
    const newIncome = {
      name: incomeName,
      amount: incomeAmount,
      date: new Date().toLocaleDateString(),
    };
    setIncomeList([...incomeList, newIncome]);
    setIncomeName('');
    setIncomeAmount(0);
  };

  return (
    <div className="income-container">
      <h2>Income</h2>
      <div className="input-container">
        <input
          type="text"
          value={incomeName}
          onChange={(e) => setIncomeName(e.target.value)}
          placeholder="Income name"
        />
        <input
          type="number"
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
          placeholder="Income amount"
        />
        <button onClick={addIncome}>Add Income</button>
      </div>
      <table className="income-table">
        <thead>
          <tr>
            <th>Income Name</th>
            <th>Income Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {incomeList.map((income, index) => (
            <tr key={index}>
              <td>{income.name}</td>
              <td>{income.amount}</td>
              <td>{income.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Budget incomeList={incomeList} />
    </div>
  );
};

export default Income;
