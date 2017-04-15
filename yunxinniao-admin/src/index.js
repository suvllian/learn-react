import React from 'react';
import { render } from 'react-dom';
import router from './routes.js';

require('./style/btn.scss');
require('./style/login.scss');
require('./style/common.scss');
require('./style/table.scss');
require('./style/reset.scss');

render(router, document.getElementById('app'));
