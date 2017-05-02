import React from 'react';
import { render } from 'react-dom';
import router from './routes.js';

require('./style/common.scss');
require('./style/reset.scss');
require('./style/home.scss');
require('./style/student.scss');
require('./style/visitor.scss');
require('./style/login.scss');

render(router, document.getElementById('app'));
