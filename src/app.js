<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
=======
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
>>>>>>> 8cc89f52b61a03a2fd2ae55ba9adc0fdfa2b74a1
