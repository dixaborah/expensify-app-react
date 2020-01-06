import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'
import ExpenseForm from '../views/ExpenseForm'



export class AddExpense extends Component{
    onSubmit = (expense) => {
        this.props.addExpense(expense)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
})


export default connect(undefined, mapDispatchToProps)(AddExpense)