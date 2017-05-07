import React from 'react'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes.jsx';


import finalCreateStore from './redux/store/configureStore'  //引入store配置
const store = finalCreateStore()

require('./style/common.scss');
require('./style/reset.scss');
require('./style/home.scss');
require('./style/student.scss');
require('./style/login.scss');
require('./style/about.scss');
require('./style/register.scss');
require('./style/resume.scss');

render(
	<Provider store={store} >
        <Router routes={routes} />
    </Provider>, 
    document.getElementById('app')
);

