import React from 'react';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';

import { render } from 'react-dom';
import App from './App.jsx';
import Registr from './component/auth/registr/registr.jsx';
import AddBook from './component/cabinet/add-book/add-book.jsx';
import EditBook from './component/cabinet/edit-book/edit-book.jsx';
import WrapperListBook from './component/cabinet/list-book/wrapper-list-book.jsx';
import Login from './component/auth/login/login.jsx';

Meteor.startup(() => {
  render(
    <Router history = {browserHistory}>
      <Route path = "/" component = {App} />
      <Route path = "/registration" component = {Registr} />
      <Route path = "/login" component = {Login} />
      <Route path = "/addbook" component = {AddBook} />
      <Route path = "/editbook" component = {EditBook} />
      <Route path = "/cabinet" component = {WrapperListBook} />
    </Router>,
    document.getElementById('render-target')
  );
});
