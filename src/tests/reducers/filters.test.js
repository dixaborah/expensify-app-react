import FiltersReducer from '../../reducers/filters'
import moment from 'moment'




test('Should set up default filters', () => {
    const state = FiltersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date_recent'
    })
})


test('Should set up text filter', () => {
    const text = 'm'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = FiltersReducer(undefined, action)
    expect(state).toEqual({
        text: 'm',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date_recent'
    })
})


test('Should set up startDate filter', () => {
    const startDate = moment(0).add(49, 'years')
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = FiltersReducer(undefined, action)
    expect(state).toEqual({
        text: '',
        startDate: startDate,
        endDate: undefined,
        sortBy: 'date_recent'
    })
})


test('Should set up endDate filter', () => {
    const endDate = moment(0).add(49, 'years')
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = FiltersReducer(undefined, action)
    expect(state).toEqual({
        text: '',
        startDate: undefined,
        endDate: endDate,
        sortBy: 'date_recent'
    })
})


test('Should set up sortBy filter to date', () => {
    const date = 'date_oldest'
    const action = {
        type: 'SORT_BY_DATE',
        date
    }
    const state = FiltersReducer(undefined, action)
    expect(state).toEqual({
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: date
    })
})


test('Should set up sortBy filter to amount', () => {
    const amount = 'amount_highest'
    const action = {
        type: 'SORT_BY_AMOUNT',
        amount
    }
    const state = FiltersReducer(undefined, action)
    expect(state).toEqual({
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: amount
    })
})