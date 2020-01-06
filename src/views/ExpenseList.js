import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from '../views/ExpenseListItem'
import selectExpenses from '../selectors/expenses'

// Stateless Component
export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
          <p>No Expense found</p>
        ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
      }
    </div>
)

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)