import './ExpenseItem.css'
import ExpenseItemDate from './ExpenseItemDate'
import Card from '../UI/Card'

const Expenses = (props) => {
    const expenseTitle = props.title
    const expenseAmount = props.amount
    const expenseDate = props.date

    return (
        <Card className="expense-item">
            <ExpenseItemDate
                date={expenseDate}
            />
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{"value: " + expenseAmount}</div>
            </div>
        </Card>
    )
}

export default Expenses