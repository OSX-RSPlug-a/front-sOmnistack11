 
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import MainPg from './../pages/MainPg/MainPg';

import Register from './../pages/Register/index';

import Profile from './../pages/Profile/index';

import NewIncident from './../pages/NewIncident/index';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPg} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}