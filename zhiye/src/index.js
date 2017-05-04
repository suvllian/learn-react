import React from 'react';
import { render } from 'react-dom';
import router from './routes.jsx';

require('./style/common.scss');
require('./style/reset.scss');
require('./style/home.scss');
require('./style/student.scss');
require('./style/login.scss');
require('./style/about.scss');
require('./style/register.scss');

render(router, document.getElementById('app'));
