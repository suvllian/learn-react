import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';

import App from './components/common/index.js';
import Home from './components/home/index.js';

const router = 
<Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  	<Route path="/home/:name" component={Home}/>
  </Route>
</Router>;

export default router;