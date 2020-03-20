import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import App from './App';

test('renders generate text button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Generate Text/i);
  expect(buttonElement).toBeInTheDocument();
});

test('Button Click Generates new Text', () => {
  const wrapper = mount(<App />);
  const _prev = wrapper.find('p').text();
  wrapper.find("button").simulate("click");
  expect(wrapper.find('p').text()).not.toEqual(_prev);
});
