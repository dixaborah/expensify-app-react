import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'

test('Should', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount='5' expenseTotal='7755' />)
    expect(wrapper).toMatchSnapshot()
})