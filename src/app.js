import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routes/AppRouter'
import configureStore from './store/configureStore'

import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'
// import './styles/styles.scss'



const store = configureStore()


const JSX = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(JSX, document.getElementById('app'))