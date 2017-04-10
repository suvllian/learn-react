import React from 'react';
import { render } from 'react-dom';
import App from './components/home/index.js';

require('./style/common.scss');
require('./style/index.scss');
require('./style/reset.scss');

render(<App/>, document.getElementById('app'));
