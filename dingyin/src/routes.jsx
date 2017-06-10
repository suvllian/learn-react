import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';

import App from './pages/common/index.jsx';
import Home from './pages/home/index.jsx';
import Register from './pages/register/index.jsx';
import Login from './pages/login/index.jsx';
import Community from './pages/commu/index.jsx';


const router = 
<Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  	<Route path="home" component={Home}/>
  	<Route path="register" component={Register}/>
  	<Route path="login" component={Login}/>
  	<Route path="community" component={Community}/>
  </Route>
</Router>;

export default router;