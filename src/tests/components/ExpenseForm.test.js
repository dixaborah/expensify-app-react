import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'

import Expenses from '../fixtures/Expenses'
import ExpenseForm from '../../views/ExpenseForm'



test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})


test('Should render ExpenseForm with Expense Data correctly', () => {
    const Expense = Expenses[0]
    const wrapper = shallow(<ExpenseForm expense={Expense} />)
    expect(wrapper).toMatchSnapshot()
})


test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})


test('Should set description on input change', () => {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})


test('Should set amount on input change', () => {
    const value = '1500'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)
})


test('Should not set amount on input change', () => {
    const value = '342.400'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe('')
})


test('Should set note on input change', () => {
    const value = 'New Note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
})


test('Should call onSubmit prop for valid form submission', () => {
    const Expense = {
        amount: Expenses[2].amount,
        createdAt: Expenses[2].createdAt,
        description: Expenses[2].description,
        note: Expenses[2].note
    }
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={Expense} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit',{ preventDefault: () => {} })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith(Expense)
})


test('Should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})


test('Should set calender focus on change', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
    expect(wrapper.state('calenderFocused')).toBe(focused)
})