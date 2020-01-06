import React from 'react'
import { shallow } from 'enzyme'

import Expenses from '../fixtures/Expenses'
import { EditExpense } from '../../components/Edit'



let editExpense, removeExpense, history, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpense editExpense={editExpense} history={history} removeExpense={removeExpense} expense={Expenses[1]} />)
})



test('Should render Edit correctly', () => {
    expect(wrapper).toMatchSnapshot()
})


test('Should handle on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(Expenses[1])
    expect(editExpense).toHaveBeenCalledWith(Expenses[1].id, Expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
})


test('Should handle remove button', () => {
    const id = Expenses[1].id
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenLastCalledWith({ id })
    expect(history.push).toHaveBeenLastCalledWith('/')
})