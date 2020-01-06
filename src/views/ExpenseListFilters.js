import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setEndDateFilter, setStartDateFilter, setTextFilter, sortByAmountFilter, sortByDateFilter } from '../actions/filters'


export class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDateFilter(startDate)
        this.props.setEndDateFilter(endDate)
    }

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSelectChange = (e) => {
        e.target.value.includes('date') ? 
        this.props.sortByDateFilter({date: e.target.value}) : 
        this.props.sortByAmountFilter({amount: e.target.value})
    }

    render () {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />

                <select value={this.props.filters.sortBy} onChange={this.onSelectChange}>
                    <option value="date_recent">Newest</option>
                    <option value="date_oldest">Oldest</option>
                    <option value="amount_lowest">Lowest Price</option>
                    <option value="amount_highest">Highest Price</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({ filters: state.filters })

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmountFilter: (amount) => dispatch(sortByAmountFilter(amount)),
    sortByDateFilter: (date) => dispatch(sortByDateFilter(date)),
    setStartDateFilter: (startDate) => dispatch(setStartDateFilter(startDate)),
    setEndDateFilter: (endDate) => dispatch(setEndDateFilter(endDate))

})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)