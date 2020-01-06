import moment from 'moment'
import { setStartDateFilter, setEndDateFilter, sortByAmountFilter, sortByDateFilter, setTextFilter } from '../../actions/filters'



test('Should setup endDate filter action object', () => {
    const action = setEndDateFilter(moment(0).add(49, 'years'))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0).add(49, 'years')
    })
})


test('Should setup startDate filter action object', () => {
    const action = setStartDateFilter(moment(0).add(49, 'years'))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0).add(49, 'years')
    })
})


test('Should setup Text filter action object with values', () => {
    const text = 'Some text'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})


test('Should setup Text filter action object with default', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})


test('Should setup SortByAmount filter action object to "amount_highest"', () => {
    const action = sortByAmountFilter({ amount: 'amount_highest' })
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        amount: 'amount_highest'
    })
})


test('Should setup SortByAmount filter action object to "amount_lowest"', () => {
    const action = sortByAmountFilter({ amount: 'amount_lowest' })
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        amount: 'amount_lowest'
    })
})


test('Should setup SortByDate filter action object to "date_recent"', () => {
    const action = sortByDateFilter({ date: 'date_recent' })
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        date: 'date_recent'
    })
})

test('Should setup SortByDate filter action object to "date_oldest"', () => {
    const action = sortByDateFilter({ date: 'date_oldest' })
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        date: 'date_oldest'
    })
})