import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import api from './../../api/'
import { fetchPostsIfNeeded } from './../../redux/actions/register.js'
import { mapStateToProps } from '../../connect/register.js'

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isPhone: true,
			alertType: 0
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
							<input type="submit" value="注册" className="sign-btn" onClick={this.getFormData.bind(this)} />
						</div>	
					</form>
					<p className="text-center">已有账号？<Link to="/login" className="color-link">立即登录</Link></p>
					<p className="text-center" style={{color: 'red'}}>{this.renderAlert()}</p>
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
		isPhone ? formData.append("phone", this.refs.phone.value) : 
			formData.append("email", this.refs.email.value);

		dispatch(fetchPostsIfNeeded(formData));	
	}

	inspectPhone(e) {
		let phone = e.target.value.replace(/\D/g, "");
		let alertType = phone.length === 11 ? 0 : 1;
		this.setState({ alertType: alertType });

		if (!alertType) {
			let table = "user"
			let column = "phone"
			let value = phone
			api.checkValue(`table=${table}&column=${column}&value=${value}`).
			  then(res => {
			  	res == 1 ? this.setState({alertType: 2}) : this.setState({alertType: 0})
			  })
		}
	}

	renderAlert() {
		let type = this.state.alertType;

    switch (type){
    	case 1:
    	  return (
          <span>请输入正确的手机号</span>
    	  )
    	  break;
    	case 2:
    	  return (
    	  	<span>手机号已注册</span>
    	  )
    	  break;
    	case 3:
    	  return (
    	  	<span>请输入正确的邮箱</span>
    	  )
    	  break;
    	case 4:
    	  return (
    	  	<span>邮箱已注册</span>
    	  )
    	  break;
    	default: 
    	  return (<span></span>)
    }
	}

	renderTab() {
		if (this.state.isPhone) {
			return (
				<div className="form-item"> 
					<input type="text" placeholder="请输入手机号" ref="phone" onBlur={this.inspectPhone.bind(this)} />
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

export default connect(mapStateToProps)(Register)
