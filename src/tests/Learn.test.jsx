import React from 'react';
import Learn from '../components/Learn.jsx';
import { shallow } from 'enzyme';

describe('Learn', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Learn />
    );
  });

it('should have intial state after mounting', () => {
    expect(wrapper.state()).toEqual( {
      lessonNumber: 1,
      complete: false,
      isLoading: true,
      lessons: []
    })
  })

  describe('resetProgress', () => {
    it('should reset the lessonNumber to 1 when called', () => {
      wrapper.instance().resetProgress();
      expect(wrapper.state('lessonNumber')).toEqual(1);
    })
  })

  describe('completeLesson', () => {
    it('should change the complete state from false to true when called', () => {
      expect(wrapper.state('complete')).toEqual(false);
      wrapper.instance().completeLesson();
      expect(wrapper.state('complete')).toEqual(true);
    })
  })

  describe('nextLesson', () => {

    it('should increment state.lessonNumber when called', () => {
      wrapper.instance().resetProgress();
      expect(wrapper.state('lessonNumber')).toEqual(1);
      wrapper.instance().nextLesson();
      expect(wrapper.state('lessonNumber')).toEqual(2);
    })

    it('should change state.complete from true to false when called', () => {
      wrapper.instance().completeLesson();
      expect(wrapper.state('complete')).toEqual(true);
      wrapper.instance().nextLesson();
      expect(wrapper.state('complete')).toEqual(false);
    })

  })
})