import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';

import App from './components/common/index.jsx';
import Login from './components/login/index.jsx';
import Company from './components/company/index.jsx';
import Student from './components/student/index.jsx';
import Home from './components/vistor/index.jsx';

const router = 
<Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  	<Route path="/home" component={Home}/>
  	<Route path="/company" component={Company} />
  	<Route path="/student" component={Student} />
  	<Route path="/login" component={Login} />
  </Route>
</Router>;

export default router;