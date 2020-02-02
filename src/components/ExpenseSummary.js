import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'

import SelectExpenseTotal from '../selectors/ExpenseTotal'
import SelectExpenses from '../selectors/ExpenseTotal'

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00')
    return (
        <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = SelectExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: SelectExpenseTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)