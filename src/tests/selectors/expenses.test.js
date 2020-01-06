import SelectExpenses from '../../selectors/expenses'
import Expenses from '../fixtures/Expenses'
import moment from 'moment'



test('Set up filter by text value', () => {
    const filters = {
        text: 'n',
        sortBy: 'date_recent',
        startDate: undefined,
        endDate: undefined
    }
    const state = SelectExpenses(Expenses, filters)
    expect(state).toEqual([Expenses[2], Expenses[1]])
})


test('Set up filter by startDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date_recent',
        startDate: moment(0).add(47, 'years'),
        endDate: undefined
    }
    const state = SelectExpenses(Expenses, filters)
    expect(state).toEqual([Expenses[2], Expenses[1]])
})


test('Set up filter by endDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date_recent',
        startDate: undefined,
        endDate: moment(0).add(48, 'years')
    }
    const state = SelectExpenses(Expenses, filters)
    expect(state).toEqual([Expenses[1], Expenses[0]])
})


test('Set up filter by sortBy "amount_highest', () => {
    const filters = {
        text: '',
        sortBy: 'amount_highest',
        startDate: undefined,
        endDate: undefined
    }
    const state = SelectExpenses(Expenses, filters)
    expect(state).toEqual(Expenses.reverse())
})


test('Set up filter by sortBy "date_oldest', () => {
    const filters = {
        text: '',
        sortBy: 'date_oldest',
        startDate: undefined,
        endDate: undefined
    }
    const state = SelectExpenses(Expenses, filters)
    expect(state).toEqual(Expenses.reverse())
})