import React from 'react';
import Home from '../components/Home.jsx';
import { shallow } from 'enzyme';

describe('Home', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow (
      <Home />
    )
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
})