import React from 'react';
import Nav from '../components/Nav.jsx';
import { shallow } from 'enzyme';

describe('Nav', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow (
      <Nav />
    )
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})