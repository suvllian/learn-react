import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';

import App from './pages/common/index.jsx';
import Home from './pages/home/index.jsx';
import Register from './pages/register/index.jsx';


const router = 
<Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  	<Route path="home" component={Home}/>
  	<Route path="register" component={Register}/>
  </Route>
</Router>;

export default router;