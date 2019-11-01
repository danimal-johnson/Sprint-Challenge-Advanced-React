import React from 'react';
import * as rtl from '@testing-library/react';
// import ReactDOM from 'react-dom';
import App from './App';

test('Renders without crashing', () => {
  const div = document.createElement('div');
  rtl.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

test('Does simple math', () => {
  expect(2+2).toBe(4);
});

test('Header text is correct', () => {
  const container = rtl.render(<App />);
  container.findByText("Womens' World Cup Search Rank");
});

test('Dark button exists', () => {

});