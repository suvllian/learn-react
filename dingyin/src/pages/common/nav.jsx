import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';

import { mapStateToProps } from '../../connect/isLogin.js';

class Nav extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			loginSuccess: false
		}
	}
	render() {
		return (
			<header className="header">
				<div className=" header-nav"> 
					<div className="container"> 
						<div className="header-left">
							<IndexLink to="/" className="link-after-rule"><i className="fa fa-android"></i>定音</IndexLink>
							<IndexLink to="/">Just make a decssion</IndexLink>
						</div>
						{this.renderNav()}
					</div>
				</div>

				<div className="header-main">
					<div className="container"> 
						<div className="header-logo">
							<IndexLink to="/">定音</IndexLink>
						</div>

						<ul className="header-ul">
							<li className="header-li"><IndexLink to="/">首页</IndexLink></li>
							<li className="header-li"><Link to="/community">情感地图</Link></li>
							<li className="header-li"><Link to="/community">社区</Link></li>
							<li className="header-li"><IndexLink to="/">我的</IndexLink></li>
						</ul>
					</div>
				</div>
			</header>
		)
	}

	renderNav() {
		let { isLoginSuccess } = this.props;
		if (!isLoginSuccess) {
			return (
			    <div className="header-right">
					<Link to="/login" className="link-after-rule">语言：中国</Link>
					<Link to="/login" className="link-after-rule">登录</Link>
					<Link to="/register">注册</Link>
				</div>
			)
		}

		return (
			<div className="header-right">
				<Link to="/" className="link-after-rule">消息</Link>
				<Link to="/">用户名</Link>
			</div>
		)
	}
}

export default connect(mapStateToProps)(Nav)