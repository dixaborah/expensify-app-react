import DataBase from '../firebase/firebase'


// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});


export const startAddExpense = (expenseData = {}) => {
  // Assign description, amount, etc to provided data(expenseData) or use default assingment
  const { description = '', amount = 0, createdAt = 0, note = '' } = expenseData
  const expense = { description, amount, createdAt, note }

  return (dispatch) => {
    return DataBase.ref('Expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}


// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});


// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});