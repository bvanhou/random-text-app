import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import Home from './views/Home';

describe('App', () => {

  it('renders generate text button', () => {
    const { getByText } = render(<Home />);
    const buttonElement = getByText(/Generate Text/i);
    expect(buttonElement).toBeInTheDocument();
    
  });

  it('Button Click Generates new Text', () => {
    const wrapper = mount(<Home />);
    const _prev = wrapper.find('p').text();
    wrapper.find("button").simulate("click");
    expect(wrapper.find('p').text()).not.toEqual(_prev);
    expect(wrapper).toMatchSnapshot();
  });

});