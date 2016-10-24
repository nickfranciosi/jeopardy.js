import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PlayerForm from '.';

it('renders without crashing', () => {
  shallow(<PlayerForm />);
});


describe('updating player name', () => {
  it('can have a name changed', () => {
    const wrapper = shallow(<PlayerForm />);
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'test' } })
    expect(wrapper.state().value).toBe('test');
  });

  it('can have a name cleared', () => {
    const wrapper = shallow(<PlayerForm />);
    const input = wrapper.find('input')
    const clearButton = wrapper.find('.clear');
    input.simulate('change', { target: { value: 'test' } })
    clearButton.simulate('click');
    expect(wrapper.state().value).toBe('');
  });
});
