import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class Login extends Component{
	render() {
		return (
			<div className="register">
				<header className="register-header"></header>
				<section className="form-container">
					<div className= "tab-caption text-center active-tab">
						<p>账号登录</p>
					</div>
					<form>
						<div className="form-item"> 
							<span className="form-icon"><i className="fa fa-user"></i></span>
							<input type="text" placeholder="账户名/手机号" ref="username" />
						</div>
						<div className="form-item"> 
							<span className="form-icon"><i className="fa fa-lock"></i></span>
							<input type="password" placeholder="密码（6-20位）" ref="password" />
						</div>	
						<div className="form-item"> 
							<input type="submit" value="登录" className="sign-btn" />
						</div>	
					</form>
					<p className="text-center">没弄有账号？<Link to="/register" className="color-link">立即注册</Link></p>
					<p className="text-center" style={{color: 'red'}}></p>
				</section>
			</div>
		)
	}
}
