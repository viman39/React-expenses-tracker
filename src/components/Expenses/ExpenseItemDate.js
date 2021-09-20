import './ExpenseItemDate.css'

const ExpenseItemDate = (props) => {
    const expenseDate = props.date

    const expenseDateMonth = expenseDate.toLocaleString('en-US', {month: 'long'})
    const expenseDateYear = expenseDate.getFullYear()
    const expenseDateDay = expenseDate.toLocaleString('en-US', {day: '2-digit'})

    return(
        <div className="expense-date">
            <div className="expense-date__month">{expenseDateMonth}</div>
            <div className="expense-date__year">{expenseDateYear}</div>
            <div className="expense-date__day">{expenseDateDay}</div>
        </div>
    )
}

export default ExpenseItemDate