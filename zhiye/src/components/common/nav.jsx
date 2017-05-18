import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
							<Link to="/" className="link-after-rule"><i className="fa fa-android"></i>职页APP</Link>
							<Link to="/login/company">进入企业版</Link>
						</div>
						{this.renderNav()}
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
							<li className="header-li"><Link to="/">校园招聘</Link></li>
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
					<Link to="/login" className="link-after-rule">登录</Link>
					<Link to="/register">注册</Link>
				</div>
			)
		}

		return (
			<div className="header-right">
				<Link to="/resume/myResume" className="link-after-rule">我的简历</Link>
				<Link to="/login">投递箱</Link>
			</div>
		)
	}
}

export default connect(mapStateToProps)(Nav)