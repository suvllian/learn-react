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
import StuEmailStepOne from './components/register/stu-email-step1.jsx';
import StuEmailStepTwo from './components/register/stu-email-step2.jsx';

import CompanyRegister from './components/register/company.jsx';
import ComEmailStepOne from './components/register/com-email-step1.jsx';
import ComEmailStepTwo from './components/register/com-email-step2.jsx';
import ComEmailStepThree from './components/register/com-email-step3.jsx';

import Resume from './components/resume/index.jsx';
import StuResumeOne from './components/resume/stu-step1.jsx';
import StuResumeTwo from './components/resume/stu-step2.jsx';
import StuResumeThree from './components/resume/stu-step3.jsx';
import StuResumeFour from './components/resume/stu-step4.jsx';
import MyResume from './components/resume/myresume.jsx';

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
      <Route path="stuOne" component={StuEmailStepOne}/>
      <Route path="stuTwo" component={StuEmailStepTwo}/>

      <Route path="company" component={CompanyRegister}/>
      <Route path="comOne" component={ComEmailStepOne}/>
      <Route path="comTwo" component={ComEmailStepTwo}/>
      <Route path="comThree" component={ComEmailStepThree}/>
    </Route>

    <Route path="resume" component={Resume}>
      <IndexRoute component={StuResumeOne} />
      <Route path="stuOne" component={StuResumeOne}/>
      <Route path="stuTwo" component={StuResumeTwo}/>
      <Route path="stuThree" component={StuResumeThree}/>
      <Route path="stuFour" component={StuResumeFour}/>
      <Route path="myResume" component={MyResume}/>
    </Route>

  	<Route path="about" component={About} />
  </Route>
</Router>;

export default router;