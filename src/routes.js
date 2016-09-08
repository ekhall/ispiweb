import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/home_page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
)
