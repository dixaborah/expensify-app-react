import { addExpense, editExpense, removeExpense } from '../../actions/expenses'




test('Should setup add expense action object', () => {
    const expenseData = {
        amount: 8500000,
        createdAt: 2000000,
        description: 'Rent',
        note: '2020 total rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            amount: 8500000,
            createdAt: 2000000,
            description: 'Rent',
            note: '2020 total rent',
            id: expect.any(String)
        }
    })
})


test('Should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            amount: 0,
            createdAt: 0,
            description: '',
            note: '',
            id: expect.any(String)
        }
    })
})


test('Should setup edit expense action object', () => {
    const note = 'Something new'
    const action = editExpense('1234',{ note })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234',
        updates: { note }
    })
})


test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '12345'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12345'
    })
})