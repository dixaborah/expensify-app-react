import React from 'react'
import { shallow } from 'enzyme';
import Header from '../../components/Header'


test('Render Header Component correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
})
