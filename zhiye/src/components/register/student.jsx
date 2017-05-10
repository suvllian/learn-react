import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPostsIfNeeded } from './../../redux/actions/register.js'

class Register extends Component {
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
						<div className={isPhone ? "col-md-6 tab-caption text-center active-tab" : "col-md-6 tab-caption text-center"} 
							onClick={this.setIsPhone.bind(this, true)}>
							<p>手机注册</p>
						</div>

						<div className={isPhone ? "col-md-6 tab-caption text-center" : "col-md-6 tab-caption text-center active-tab"} 
							onClick={this.setIsPhone.bind(this, false)}>
							<p>邮箱注册</p>
						</div>
					</div>
					<form>
						{this.renderTab()}
						<div className="form-item"> 
							<input type="text" placeholder="账户名（6-20位）" ref="username" />
						</div>
						<div className="form-item"> 
							<input type="password" placeholder="密码（6-20位）" ref="password" />
						</div>	
						<div className="form-item"> 
							<Link to="/register/stuOne">
								<input type="submit" value="注册" className="sign-btn" onClick={this.getFormData.bind(this)} />
							</Link>
						</div>	
					</form>
					<p className="text-center">已有账号？<Link to="/login" className="color-link">立即登录</Link></p>
				</section>

				<footer className="login-bottom">
					<p>— 专注互联网职业机会 —</p>
				</footer>
			</div>
		)
	}

	setIsPhone(isPhoneReg) {
		this.setState({ isPhone: isPhoneReg });
	}

	getFormData(e) {
		e.preventDefault();

		const { dispatch } = this.props;
		let isPhone = this.state.isPhone,	
		    formData = new FormData();

		formData.append("username", this.refs.username.value);
		formData.append("password", this.refs.password.value);
		formData.append("klass", 1);
		isPhone ? formData.append("phone", this.refs.phone.value) : 
			formData.append("email", this.refs.email.value);

		dispatch(fetchPostsIfNeeded(formData));	
	}

	renderTab() {
		if (this.state.isPhone) {
			return (
				<div className="form-item"> 
					<input type="text" placeholder="请输入手机号" ref="phone" />
				</div>
			)
		} else {
			return (
				<div className="form-item"> 
					<input type="text" placeholder="请输入邮箱" ref="email" />
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	const { register } = state;
	const { username, password, id } = register;
	return { username, password, id }
}

export default connect(
	mapStateToProps
)(Register)
