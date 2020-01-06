import { createStore, combineReducers } from 'redux'
import uuidv4 from 'uuid/v4'


// EXPENSES REDUCER
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: { id: uuidv4(), description, note, amount, createdAt }
})

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


const expensesReducerDefaultState = []

const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
            break

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                return expense.id === action.id ? { ...expense, ...action.updates } : expense
                // if (expense.id === action.id) {
                //     return { ...expense, ...action.updates }
                // } else {
                //     expense
                // }
            })

        default:
            return state
            break;
    }
}


// FILTERS REDUCER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmountFilter = ( { amount }) => ( {
    type: 'SORT_BY_AMOUNT',
    amount
})

const sortByDateFilter = ({ date }) => ( {
    type: 'SORT_BY_DATE',
    date
})

const setStartDateFilter = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDateFilter = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})


const filtersReducerDefaultState = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined }
const filtersReducer = ( state = filtersReducerDefaultState, action ) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text}
            break

        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: action.amount }
            break
        
        case 'SORT_BY_DATE':
            return { ...state, sortBy: action.date }
            break

        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate }
            break

        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate }
            break

        default:
            return state
            break;
    }
}



const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => expenses.filter((expense)=> {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
    }
).sort((a,b) => {
    if (sortBy === 'date_recent') {
        return a.createdAt < b.createdAt ? 1 : -1
    } else if(sortBy === 'date_oldest') {
        return a.createdAt < b.createdAt ? -1 : 1
    } else if(sortBy === 'amount_highest') {
        return a.amount < b.amount ? 1 : -1
    } else if( sortBy === 'amount_lowest') {
        return a.amount < b.amount ? -1 : 1
    }
})

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})


const addExpenseOne = store.dispatch(addExpense({ description: 'Rent some appartment', amount: 30000, createdAt: 1000}))
const addExpenseTwo = store.dispatch(addExpense({ description: 'Coffe sOME', amount: 300, createdAt: 1200 }))

store.dispatch(setStartDateFilter(125))
store.dispatch(setEndDateFilter(1250))
store.dispatch(setTextFilter('SoMe'))

store.dispatch(sortByAmountFilter({ amount: 'amount_lowest' }))
store.dispatch(sortByDateFilter({ date: 'date_oldest' }))