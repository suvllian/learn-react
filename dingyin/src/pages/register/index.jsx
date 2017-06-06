import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

require("./index.scss");

export default class Register extends Component{
	render() {
		return (
			<div className="register">
				<header className="register-header"></header>
				<section className="form-container">
					<div className= "tab-caption text-center active-tab">
						<p>账号注册</p>
					</div>
					<form>
						<div className="form-item"> 
						  <span className="form-icon"><i className="fa fa-phone"></i></span>
							<input type="text" placeholder="手机号" ref="username" />
						</div>
						<div className="form-item"> 
							<span className="form-icon"><i className="fa fa-user"></i></span>
							<input type="text" placeholder="账户名（6-20位）" ref="username" />
						</div>
						<div className="form-item"> 
							<span className="form-icon"><i className="fa fa-lock"></i></span>
							<input type="password" placeholder="密码（6-20位）" ref="password" />
						</div>	
						<div className="form-item"> 
							<input type="submit" value="注册" className="sign-btn" />
						</div>	
					</form>
					<p className="text-center">已有账号？<Link to="/login" className="color-link">立即登录</Link></p>
					<p className="text-center" style={{color: 'red'}}></p>
				</section>
			</div>
		)
	}
}
