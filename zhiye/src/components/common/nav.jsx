import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Nav extends Component{
	render() {
		return (
			<header className="header">
				<div className=" header-nav"> 
					<div className="container"> 
						<div className="header-left">
							<Link to="/" className="link-after-rule">职页APP</Link>
							<Link to="/login/company">进入企业版</Link>
						</div>
						<div className="header-right">
							<Link to="/login" className="link-after-rule">登录</Link>
							<Link to="/register">注册</Link>
						</div>
					</div>
				</div>

				<div className="header-main">
					<div className="container"> 
						<div className="header-logo">
							<Link to="/">职页</Link>
						</div>

						<ul className="header-ul">
							<li className="header-li"><Link to="/">首页</Link></li>
							<li className="header-li"><Link to="/">公司</Link></li>
							<li className="header-li"><Link to="/">定制</Link></li>
						</ul>
					</div>
				</div>
			</header>
		)
	}
}
