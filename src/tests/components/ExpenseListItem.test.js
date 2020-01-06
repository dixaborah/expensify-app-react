import React from 'react'
import { shallow } from 'enzyme'

import ExpenseListItem from '../../views/ExpenseListItem'
import Expenses from '../fixtures/Expenses'



test('Should render ExpenseListItem correctly', () => {
    const Expense = Expenses[1]
    const wrapper = shallow(<ExpenseListItem { ...Expense } />)
    expect(wrapper).toMatchSnapshot()
})