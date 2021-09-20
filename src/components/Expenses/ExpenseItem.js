import './ExpenseItem.css'
import ExpenseItemDate from './ExpenseItemDate'
import Card from '../UI/Card'
import { useState } from 'react'

const ExpenseItem = (props) => {
    const [expenseTitle, setExpenseTitle] = useState(props.title);
    const expenseAmount = props.amount
    const expenseDate = props.date

    const clickHandler = () => {
        setExpenseTitle('Updated')
    }

    return (
        <Card className="expense-item">
            <ExpenseItemDate
                date={expenseDate}
            />
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{"value: " + expenseAmount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem