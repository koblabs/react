import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [edit, setEdit] = useState(false);

  const handleSaveExpenseData = (expenseData) => {
    props.onAddExpense(expenseData);
    setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  if (!edit) {
    return (
      <div className="new-expense">
        <button onClick={handleEdit}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={handleSaveExpenseData}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default NewExpense;
