import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = (props) =>{
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    
    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: '',
    // })
    //
    // const userInputChanged = (event) => {
        //
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })
        //
        // THIS IS BAD 
        // state update might not execute imediately in react, and (even tho it's rare)
        // it could happen to depend on a variable state that is not yet updated and generate weird errors
        //
        //
        // a better way to do this is to use a function that updates the state
        //
        // setUserInput((prevState) => {
        //     return {...prevState, title: event.target.value}
        // })
    // }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData)

        setAmount('')
        setTitle('')
        setDate('')
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm