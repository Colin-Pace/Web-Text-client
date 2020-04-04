import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import TableTop from '../tableTop/tableTop.js';


function handleTableTopReady() {
  return;
}

it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(

    <BrowserRouter>

      <TableTop listenForTableTopReady = { handleTableTopReady } />

    </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});
