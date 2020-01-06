import moment from 'moment'
import selectors from '../../selectors/expenses'
import Expenses from '../fixtures/Expenses'




test('Should filter by text value', () => {
    const filters = {
        text: 'm',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date_recent'
    }

    const result = selectors(Expenses, filters)
    expect(result).toEqual([Expenses[2], Expenses[0]])
})


test('Should filter by startDate', () => {
    const filters = {
        text: '',
        startDate: moment(0).add(46, 'years'),
        endDate: undefined,
        sortBy: 'date_recent'
    }

    const result = selectors(Expenses, filters)
    expect(result).toEqual([Expenses[2], Expenses[1]])
})


test('Should filter by endDate', () => {
    const filters = {
        text: '',
        startDate: undefined,
        endDate: moment(0).add(48, 'years'),
        sortBy: 'date_recent'
    }

    const result = selectors(Expenses, filters)
    expect(result).toEqual([Expenses[1], Expenses[0]])
})


test('Should filter by date "sortBy=date_oldest"', () => {
    const filters = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date_oldest'
    }

    const result = selectors(Expenses, filters)
    expect(result).toEqual(Expenses)
})


test('Should filter by amount "sortBy=amount_highest"', () => {
    const filters = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount_highest'
    }

    const result = selectors(Expenses, filters)
    expect(result).toEqual(Expenses.reverse())
})


// NOT WORKING
// test('Should filter by amount "sortBy=amount_lowest"', () => {
//     const filters = {
//         text: '',
//         startDate: undefined,
//         endDate: undefined,
//         sortBy: 'amount_lowest'
//     }
//     const result = selectors(Expenses, filters)
//     expect(result).toEqual([Expenses[0], Expenses[1]. Expenses[2]])
// })