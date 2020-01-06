import React from 'react'
import { shallow } from 'enzyme'
import { AddExpense } from '../../components/AddExpense'
import Expenses from '../fixtures/Expenses'

let addExpense, history, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpense addExpense={addExpense} history={history} />)
})

test('Should render AddExpense correctly', () => {
    expect(wrapper).toMatchSnapshot()
})


test('Should handle on submit', () => {
    const expense = Expenses[2]
    wrapper.find('ExpenseForm').prop('onSubmit')(expense)
    expect(addExpense).toHaveBeenLastCalledWith(expense)
    expect(history.push).toHaveBeenLastCalledWith('/')
})