import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import DataBase from '../../firebase/firebase';
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import Expenses from '../fixtures/expenses'

const middleWare = [thunk]
const createMockStore = configureStore(middleWare)

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expense = Expenses[2]
  const action = addExpense(expense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense
  });
});


test('Should add Expense to DataBase and Store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    createdAt: 23747343,
    note: ''
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return DataBase.ref(`Expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})



test('Should add default Expense to DataBase and Store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    
    return DataBase.ref(`Expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})