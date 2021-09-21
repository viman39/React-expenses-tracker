import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from 'react'

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpenseHandler = (expense) => {
    expenses.push(expense)
    console.log(expenses)
    setExpenses(expenses)
  }

  return (
    <div>
      <h1>
        Expenses Tracker <small>(but cooler)</small>
      </h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses 
        data={expenses}
      />
    </div>
  );
}

export default App;
