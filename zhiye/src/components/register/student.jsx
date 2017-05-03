import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Login extends Component{
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
						<div className="form-item"> 
							{this.renderTab()}
						</div>
						<div className="form-item"> 
							<input type="text" placeholder="账户名（6-20位）" />
						</div>
						<div className="form-item"> 
							<input type="password" placeholder="密码（6-20位）" />
						</div>	
						<div className="form-item"> 
							<input type="submit" value="注册" className="sign-btn"/>
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

	renderTab() {
		if (this.state.isPhone) {
			return (
				<input type="text" placeholder="请输入手机号" />
			)
		} else {
			return (
				<input type="text" placeholder="请输入邮箱" />
			)
		}
	}
}
