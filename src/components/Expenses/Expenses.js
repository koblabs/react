import { useState } from "react";

import Card from "../UI/Card";

import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2022");

  const handleChangeExpenseFilter = (dateYear) => {
    setYear(dateYear);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onChangeExpenseFilter={handleChangeExpenseFilter}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />;
      </Card>
    </li>
  );
};

export default Expenses;
