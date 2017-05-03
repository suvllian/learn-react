import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';

import App from './components/common/index.jsx';
import Company from './components/company/index.jsx';
import Student from './components/student/index.jsx';
import Home from './components/home/index.jsx';
import About from './components/about/index.jsx';

import Login from './components/login/index.jsx';
import StudentLogin from './components/login/student.jsx';
import CompanyLogin from './components/login/company.jsx';
import Register from './components/register/index.jsx';
import StudentRegister from './components/register/student.jsx';
import CompanyRegister from './components/register/company.jsx';

const router = 
<Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  	<Route path="home" component={Home}/>
  	<Route path="company" component={Company} />
  	<Route path="student" component={Student} />
  	
  	<Route path="login" component={Login}>
      <IndexRoute component={StudentLogin} />
      <Route path="student" component={StudentLogin}/>
      <Route path="company" component={CompanyLogin}/>
    </Route>

    <Route path="register" component={Register}>
      <IndexRoute component={StudentRegister} />
      <Route path="student" component={StudentRegister}/>
      <Route path="company" component={CompanyRegister}/>
    </Route>

  	<Route path="about" component={About} />
  </Route>
</Router>;

export default router;