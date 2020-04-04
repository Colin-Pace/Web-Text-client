import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Registration from '../registration/registration.js';



it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(

    <BrowserRouter>

      <Registration />

    </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});
