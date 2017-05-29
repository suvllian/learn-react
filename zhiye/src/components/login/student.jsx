import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { mapStateToProps } from '../../connect/isLogin.js'
import { loginFunction } from './../../redux/actions/login.js'

class Login extends Component{
	constructor(props) {
		super(props);

		this.state = {
			isPhone: true
		}
	}

	render() {
		let isPhone = this.state.isPhone;

		return (
			<div className="login">
				<header className="login-header"></header>

				<section className="login-form">
					<div className="row">
						<div className={isPhone ? "tab-caption text-center active-tab" : "col-md-6 tab-caption text-center"} 
							onClick={this.setIsPhone.bind(this, true)}>
							<p>手机登录</p>
						</div>
					</div>
					<form>
						<div className="form-item"> 
							{this.renderTab()}
						</div>
						<div className="form-item"> 
							<input type="password" placeholder="请输入密码" ref="password" />
						</div>	
						<div className="form-item" onClick={this.login.bind(this)}> 
							<input type="submit" value="登录" className="sign-btn"/>
						</div>	
					</form>
					<p className="text-center">还没有职页网账号？<Link to="/register" className="color-link">立即注册</Link></p>
				</section>

				<footer className="login-bottom">
					<p>— 专注互联网职业机会 —</p>
				</footer>
			</div>
		)
	}

	login(e) {
		e.preventDefault();

		const { dispatch } = this.props;
		let username = this.refs.username.value,
		  password = this.refs.password.value,
	    formData = new FormData();

	    formData.append("username", username);
	    formData.append("password", password);

	    dispatch(loginFunction(formData));	
	}

	setIsPhone(isPhoneReg) {
		this.setState({ isPhone: isPhoneReg });
	}

	renderTab() {
		if (this.state.isPhone) {
			return (
				<input type="text" placeholder="请输入手机号"  ref="username" />
			)
		} else {
			return (
				<input type="text" placeholder="请输入邮箱" />
			)
		}
	}
}

export default connect(mapStateToProps)(Login)