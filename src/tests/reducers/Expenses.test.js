import moment from 'moment'

import ExpensesReducer from '../../reducers/expenses'
import Expenses from '../fixtures/Expenses'



test('Should set state to default values', () => {
    const state = ExpensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})


test('Should add expense', () => {
    const expense = { id: 4, amount: 34563, createdAt: moment(0).add(5, 'days'), description: 'New Expense', note: '' }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = ExpensesReducer(Expenses, action)
    expect(state).toEqual([ ...Expenses, expense ])
})


test('Should edit expense with given id', () => {
    const note = 'Adding note'
    const action = {
        type: 'EDIT_EXPENSE',
        id: Expenses[1].id,
        updates: { note }
    }
    const state = ExpensesReducer(Expenses, action)
    expect(state[1].note).toBe(note)
})


test('Should not edit expense if id not found', () => {
    const  note = 'Adding note'
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'no id',
        updates: { note }
    }
    const state = ExpensesReducer(Expenses, action)
    expect(state).toEqual(Expenses)
})


test('Should remove expense with provided id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: Expenses[1].id }
    const state = ExpensesReducer(Expenses, action)
    expect(state).toEqual([ Expenses[0], Expenses[2] ])
})


test('Should remove expense without id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: 'someID' }
    const state = ExpensesReducer(Expenses, action)
    expect(state).toEqual(Expenses)
})