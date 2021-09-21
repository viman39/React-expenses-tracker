import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react';

const Expenses = (props) => {
    const expenses = props.data
    let [filter, setFilter] = useState('2021')

    const updateFilter = (value) => {
        setFilter(value)
    }

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={updateFilter} selectedFilter={filter} />
                <ExpenseItem 
                    title={expenses[0].title}
                    amount={expenses[0].amount}
                    date={expenses[0].date}
                />
            </Card>
        </div>
    )
}

export default Expenses