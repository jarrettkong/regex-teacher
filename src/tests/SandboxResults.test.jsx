import React from 'react';
import SandboxResults from '../components/SandboxResults.jsx'
import { shallow } from 'enzyme';

const mockData = ["email1@test.com", "email_two@test-2.com"]

describe('SandboxResults', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SandboxResults matches={mockData}/>
    )
  });

  it('should render the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

});