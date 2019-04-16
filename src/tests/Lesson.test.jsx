import React from 'react';
import Lesson from '../components/Lesson.jsx';
import { shallow } from 'enzyme';
import { default as mockData } from '../data.js';

const mockNextLesson = jest.fn();
const mockCompleteLesson = jest.fn();

const mockPattern = '\\d{2}\/\\d{2}\/\\d{4}';
const mockFlags = '';

describe('Lesson', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow (
      <Lesson lessonNumber="2"
              lesson={mockData[1]}
              nextLesson={mockNextLesson}
              completeLesson={mockCompleteLesson}/>
    )
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
  describe('getResult', () => {

    it('should output an array of true/false valuse based on the input', () => {
      const result = wrapper.instance().getResult(mockPattern, mockFlags);
      expect(result).toEqual([true, true, false, false, false])
    })

  });

  describe('checkAnswer', () => {
    it('should call completeLesson if the result is correct', () => {
      wrapper.instance().checkAnswer(mockPattern, mockFlags);
      expect(mockCompleteLesson).toHaveBeenCalled()
    })

    it('should not call completeLesson if the result is incorrect', () => {
      mockCompleteLesson.mockClear();
      wrapper.instance().checkAnswer('failure', mockFlags);
      expect(mockCompleteLesson).toHaveBeenCalledTimes(0)
    })

  })

  // conditional rendering test when complete
  describe('Lesson render when complete', () => {

    beforeEach(() => {
      wrapper = shallow (
        <Lesson lessonNumber="2"
                lesson={mockData[1]}
                nextLesson={mockNextLesson}
                completeLesson={mockCompleteLesson}
                complete="true"/>
      )
    })
    
    it('should render the completeButton when the correct answer is guessed', () => {
      expect(wrapper).toMatchSnapshot();
    })

    describe('continueButton', () => {
    
      it('should call nextLesson on click', () => {
        wrapper.find('.Lesson-next-round').simulate('click', { preventDefault: () => {} })
        expect(mockNextLesson).toHaveBeenCalled();
      })

    })

  })
  
})