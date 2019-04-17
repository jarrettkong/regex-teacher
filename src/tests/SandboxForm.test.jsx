import React from 'react';
import SandboxForm from '../components/SandboxForm.jsx'
import { shallow } from 'enzyme';

const mockHandleForm = jest.fn();

describe('SandboxForm', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SandboxForm handleForm={mockHandleForm} />
    )
  });

  it('should render the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('_handleForm', () => {

    it('should be called when pattern input changed', () => {
      wrapper.find('#pattern-input').simulate('change', { target: { value: 'pattern' } })
      expect(mockHandleForm).toHaveBeenCalled();
    })

    it('should be called when pattern input changed', () => {
      wrapper.find('#flag-input').simulate('change', { target: { value: 'flag' } })
      expect(mockHandleForm).toHaveBeenCalled();
    })

    it('should be called when pattern input changed', () => {
      wrapper.find('#pattern-input').simulate('change', { target: { value: 'pattern' } })
      expect(mockHandleForm).toHaveBeenCalled();
    })

  })

});