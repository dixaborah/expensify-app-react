import uuidv4 from 'uuid/v4'

const addExpense = ({ amount = 0, createdAt = 0, description = '', note = '' } = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: { id: uuidv4(), description, note, amount, createdAt }
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})


export { addExpense, editExpense, removeExpense }