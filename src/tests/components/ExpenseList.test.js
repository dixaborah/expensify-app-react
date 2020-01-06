import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseList } from '../../views/ExpenseList'
import Expenses from '../fixtures/Expenses'



test('Should render ExpenseList with Expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={Expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})