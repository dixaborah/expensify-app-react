import ExpenseTotal from '../../selectors/ExpenseTotal'
import expenses from '../fixtures/expenses'

test('Should return 0 with no expense', () => {
    const res = ExpenseTotal([])
    expect(res).toBe(0)
})


test('Should return amount with one expense', () => {
    const res = ExpenseTotal([expenses[0]])
    expect(res).toBe(195)

})

test('Should return amount with multiple expense', () => {
    const res = ExpenseTotal(expenses)
    expect(res).toBe(114195)

})