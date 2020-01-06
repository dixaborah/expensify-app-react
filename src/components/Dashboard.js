import React from 'react'
import ExpenseList from '../views/ExpenseList'
import ExpenseListFilters from '../views/ExpenseListFilters'

const Dashboard = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default Dashboard