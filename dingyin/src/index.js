import React from 'react'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import routes from './routes.jsx';

import finalCreateStore from './redux/configureStore.js'  //引入store配置
const store = finalCreateStore()

require('./style/common.scss');
require('./style/reset.scss');
require('./style/home.scss');
require('./style/register.scss');

render(
	<Provider store={store} >
    	<Router routes={routes} />
    </Provider>, 
    document.getElementById('app')
);
