import React from 'react';
import { render } from 'react-dom';

import router from './routes.js';
// import './style/common.scss';
// import './style/index.scss';

require('./style/common.scss');
require('./style/index.scss');
require('./style/reset.scss');

render(router, document.getElementById('app'));
