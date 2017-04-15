import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';

import App from './components/common/index.jsx';
import Home from './components/home/index.jsx';
import Login from './components/login/index.jsx';
import Change from './components/change/index.jsx';
import Add from './components/add/index.jsx';

const router = 
<Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Login} />
  	<Route path="/login" component={Login}/>
  	<Route path="/home" component={Home}/>
  	<Route path="/change/:id" component={Change} />
  	<Route path="/add" component={Add} />
  </Route>
</Router>;

export default router;