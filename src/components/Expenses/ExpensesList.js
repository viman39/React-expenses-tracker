import "./ExpenseItem.css";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredExpenses = props.expenses;

  if (filteredExpenses.length === 0) {
    return <p className="expenses-list__fallback">No expenses found</p>;
  } else {
    return (
      <ul className="expenses-list">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
