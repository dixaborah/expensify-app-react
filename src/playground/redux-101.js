import { createStore } from 'redux'

// Action Generators - Functions that return action object
const incrementCount = ({ incrementBy = 1 } = {} ) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})



// Reducer
const countReducer = ( state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy }
            break

        case 'DECREMENT':
            return { count: state.count - action.decrementBy }
            break

        case 'SET':
            return { count: action.count}
            break

        case 'RESET':
            return { count: 0 }

        default: return state
            break
        }
    }


// Instanse Of CreateStore
const store = createStore(countReducer)


store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(resetCount())
store.dispatch(setCount({ count : 50 }))
store.dispatch(decrementCount({ decrementBy: 45 }))
store.dispatch(incrementCount({ incrementBy: 'o'}))
store.dispatch(decrementCount({ decrementBy: 3 }))