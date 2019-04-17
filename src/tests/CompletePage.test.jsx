import React from 'react';
import CompletePage from '../components/CompletePage.jsx';
import { shallow } from 'enzyme';

const mockResetProgress = jest.fn();

describe('Home', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow (
      <CompletePage resetProgress={mockResetProgress} />
    )
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('resetButton', () => {
    it('should call resetProgress on click', () => {
      wrapper.find('#resetButton').simulate('click', { preventDefault: () => {} })
      expect(mockResetProgress).toHaveBeenCalled();
    })
  })
  
})