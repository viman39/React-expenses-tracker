import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const showAddExpenseForm = props.showAddExpense

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: parseInt(Math.random() * 10000).toString()
        }

        props.onAddExpense(expenseData)
    }

    const cancelAddExpense = () => {
        props.cancelAddExpense()
    }

    const displayAddExpense = () => {
        props.displayAddExpense()
    }
    
    return (
        <div className="new-expense">
            {showAddExpenseForm === false && <button onClick={displayAddExpense}>Add Expense!</button>}
            {showAddExpenseForm === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelAddExpense={cancelAddExpense}/>}
        </div>
    )
}

export default NewExpense