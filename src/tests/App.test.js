import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import '../setupTests.js';

const fakeEvent = { preventDefault: () => console.log('preventDefault') };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders form and email indexes', () => {
  const wrapper = shallow(<App />);
  
  expect(!!wrapper.find('form')).toEqual(true);
  expect(!!wrapper.find('.EmailIndexes')).toEqual(true);
});

it('counts index item element after submit number of row', () => {
  const wrapper = shallow(<App />);
  const expectedNumberOfRow = 30;
  wrapper.setState({
    numberOfRow: expectedNumberOfRow
  });

  wrapper.find('form').simulate("submit", fakeEvent);
  expect(
    wrapper.state().emails.length === expectedNumberOfRow
  ).toEqual(true);
});
