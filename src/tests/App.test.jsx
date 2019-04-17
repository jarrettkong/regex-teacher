import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import { shallow } from 'enzyme';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
})
