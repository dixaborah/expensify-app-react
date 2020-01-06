import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            description: props.expense ? props.expense.description : '',
            error: '',
            calenderFocused: false,
            note: props.expense ? props.expense.note : ''
        }
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (amount === '' || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description) {
            this.setState(() => ({ error: 'Please provide description' }))
        } else if (!this.state.amount) {
            this.setState(() => ({ error: 'Please provide amount' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                amount: parseFloat(this.state.amount)*100,
                createdAt: this.state.createdAt.valueOf(),
                description: this.state.description,
                note: this.state.note
            })
        }
    }


    render () {
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text" placeholder="Description" autoFocus value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea placeholder="Add a note for your expense (Optional)"
                        value={this.state.note} onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}