import React from 'react';
import * as rtl from '@testing-library/react';
// import ReactDOM from 'react-dom';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  rtl.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
