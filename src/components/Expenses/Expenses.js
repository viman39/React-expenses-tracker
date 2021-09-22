import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const expenses = props.items;
  let [filter, setFilter] = useState("2021");

  const filteredExpenses = expenses.filter( expense => { return expense.date.getFullYear().toString() === filter } )

  const updateFilter = (value) => {
    setFilter(value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={updateFilter} selectedFilter={filter} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
