import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes.jsx';

import finalCreateStore from './redux/store/configureStore'  //引入store配置
import reducer from './redux/index.js'  // 引入reducers集合

require('./style/common.scss');
require('./style/reset.scss');
require('./style/home.scss');
require('./style/student.scss');
require('./style/login.scss');
require('./style/about.scss');
require('./style/register.scss');
require('./style/resume.scss');

const store = finalCreateStore(reducer)

// 创建一个增强版的history来结合store同步导航事件
const history = syncHistoryWithStore(hashHistory, store)

render(
	<Provider store={store}>
        <div>
            <Router history={history} routes={routes} />
        </div>
    </Provider>, 
    document.getElementById('app')
);
