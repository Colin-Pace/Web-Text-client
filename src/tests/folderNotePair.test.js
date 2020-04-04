import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import FolderNotePair from '../folderNotePair/folderNotePair.js';



it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(

    <BrowserRouter>

      <FolderNotePair />

    </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});
