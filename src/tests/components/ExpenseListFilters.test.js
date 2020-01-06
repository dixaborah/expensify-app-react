import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseListFilters } from '../../views/ExpenseListFilters'
import { altFilters, filters } from '../fixtures/Filters'



let setTextFilter, sortByAmountFilter, sortByDateFilter, setStartDateFilter, setEndDateFilter, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByAmountFilter = jest.fn()
    sortByDateFilter = jest.fn()
    setStartDateFilter = jest.fn()
    setEndDateFilter = jest.fn()

    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmountFilter={sortByAmountFilter}
        sortByDateFilter={sortByDateFilter}
        setStartDateFilter={setStartDateFilter}
        setEndDateFilter={setEndDateFilter}
    />)
})


test('Should render ExpenseListFilter', () => {
    expect(wrapper).toMatchSnapshot()
})


test('Should render ExpenseListFilter', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})


test('Should handle text change', () => {
    const value = 'some text'
   wrapper.find('input').simulate('change', { target: { value }})
   expect(setTextFilter).toHaveBeenLastCalledWith(value)
})


test('Should sort by date ="date_oldest', () => {
    const value = 'date_oldest'
    wrapper.find('select').simulate('change', { target: { value }})
    expect(sortByDateFilter).toHaveBeenLastCalledWith({ date: value })
})


test('Should sort by amount="amount_highest', () => {
    const value = 'amount_highest'
    wrapper.find('select').simulate('change', { target: { value }})
    expect(sortByAmountFilter).toHaveBeenLastCalledWith({ amount: value })
})


test('Should sort by amount="amount_lowest', () => {
    const value = 'amount_lowest'
    wrapper.find('select').simulate('change', { target: { value }})
    expect(sortByAmountFilter).toHaveBeenLastCalledWith({ amount: value })
})


test('Should handle date changes', () => {
    wrapper.setProps({ filters: altFilters })
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate: altFilters.startDate, endDate: altFilters.endDate})
    expect(setStartDateFilter).toHaveBeenLastCalledWith(altFilters.startDate)
    expect(setEndDateFilter).toHaveBeenLastCalledWith(altFilters.endDate)
})


test('Should handle date focus change', () => {
    const calenderFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
})