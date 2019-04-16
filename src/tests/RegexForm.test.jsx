import React from 'react';
import RegexForm from '../components/RegexForm.jsx'
import { shallow } from 'enzyme';

const mockCheckAnswer = jest.fn();

describe('RegexForm', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <RegexForm checkAnswer={mockCheckAnswer} />
    )
  });

  it('should render the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have proper default state', () => {
    expect(wrapper.state()).toEqual({
      pattern: '',
      flags: ''
    });
  })

  describe('_handlePattern', () => {

    it('should update state on call', () => {
      expect(wrapper.state('pattern')).toEqual('');
      wrapper.find('#pattern-input').simulate('change', { target: { value: 'pattern' } })
      expect(wrapper.state('pattern')).toEqual('pattern');
    })

  })

  describe('_handleFlags', () => {

    it('should update state on call', () => {
      expect(wrapper.state('flags')).toEqual('');
      wrapper.find('#flag-input').simulate('change', { target: { value: 'flags' } })
      expect(wrapper.state('flags')).toEqual('flags');
    })

  })

  describe('_handleSubmit', () => {

    it('should call checkAnswer on submit', () => {
      wrapper.find('.RegexForm').simulate('submit', { preventDefault: () => {} });
      expect(mockCheckAnswer).toBeCalled();
    });
  });
  

});

