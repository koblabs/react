import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Inputs/NewExpense";

const INITIAL = [
  { title: "Ay3 Ka", amount: 2441.13, date: new Date(2023, 7, 1) },
  { title: "Rent Ka", amount: 860.13, date: new Date(2023, 0, 5) },
  { title: "Car Ka", amount: 100.0, date: new Date(2024, 1, 5) },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL);

  const handleAddExpense = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
