import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';

import Academic from './pages/Academic';
import NotFound from './pages/NotFound';
import './static/css/main.scss'; // global resets + 404 styles

const TRACKING_ID = 'G-DJNNQ937RF'; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const { PUBLIC_URL } = process.env;

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Academic} />
      <Route component={NotFound} status={404} />
    </Switch>
  </BrowserRouter>
);

export default App;
