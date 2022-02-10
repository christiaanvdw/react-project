import React from "react";
import "./ExpenseFilter.css";

const ExpensesFilter = () => {
  const onSelectHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onSelect={onSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

// chosen year is lifted up to the expenses component from expense filter and store it in state there
