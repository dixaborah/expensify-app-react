import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routes/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'

import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'
// import './styles/styles.scss'



const store = configureStore()

// Getting Expenses Array from
import Expenses from './tests/fixtures/Expenses'

store.dispatch(addExpense(Expenses[0]))
store.dispatch(addExpense(Expenses[1]))
store.dispatch(addExpense(Expenses[2]))


const JSX = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(JSX, document.getElementById('app'))