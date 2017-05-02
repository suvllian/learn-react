import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Nav extends Component{
	render() {
		return (
			<header className="header-nav">
				<div className="header-logo">
					<Link to="/">职页</Link>
				</div>
				<div className="header-link">
					<Link to="/login">求职者登录</Link>
					<Link to="/login">企业版</Link>
				</div>
			</header>
		)
	}
}
