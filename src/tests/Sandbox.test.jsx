import React from 'react';
import Sandbox from '../components/Sandbox.jsx'
import { shallow } from 'enzyme';

describe('SandboxForm', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Sandbox />
    )
  });

  it('should render the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have proper default state', () => {
    expect(wrapper.state()).toEqual({
      pattern: '',
      flags: '',
      inputValue: '',
      matches: []
    });
  })

});

