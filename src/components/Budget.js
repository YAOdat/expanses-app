import React, { useState } from 'react';
import './budget.css';

const Budget = ({ incomeList, expenseList }) => {
  const [budgetType, setBudgetType] = useState('month');
  const [budgetAmount, setBudgetAmount] = useState(0);

  const handleBudgetTypeChange = (e) => {
    setBudgetType(e.target.value);
  };

  const calculateBudget = () => {
    const totalIncome = incomeList
    const totalExpense = expenseList
    console.log(totalIncome);
    console.log(expenseList);

    const totalBudget = totalIncome - totalExpense;
  
    switch (budgetType) {
      case 'day':
        return totalBudget / 30;
      case 'week':
        return totalBudget / 4;
      case 'month':
        return totalBudget;
      case 'year':
        return totalBudget * 12;
      default:
        return totalBudget;
    }
  };
  

  return (
    <div className="budget">
      <h2>Budget</h2>
      <div>
        <label>Budget Type:</label>
        <select value={budgetType} onChange={handleBudgetTypeChange}>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div>
        <label>Budget Amount:</label>
        <span>{calculateBudget()}</span>
        <span>{budgetAmount}</span>
      </div>
    </div>
  );
};

export default Budget;
