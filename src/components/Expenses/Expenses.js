import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

const Expenses = (props) => {
    const expenses = props.data

    return(
        <Card className="expenses">
            <ExpenseItem 
            title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}
        />
        </Card>
    )
}

export default Expenses