import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import api from './../../api'

require("./index.scss");

export default class Register extends Component{
	constructor(props) {
		super(props);

	}

	submitForm(e) {
		e.preventDefault();
    let formData = new FormData(),
        form = this.refs.form,
        phone = form.phone.value.trim(),
        username = form.username.value.trim(),
        password = form.password.value.trim();
    if (!phone || !username || !password) {
    	console.log("请输入完成的账号密码");
    	return ;
    }
    api.checkPhone(phone).then((res) => {
    	if (res != 0) {
        console.log("该手机号已被注册");
    		return ;
    	} else {
    		// 注册账号
    		formData.append("phone", phone);
		    formData.append("username", username);
		    formData.append("password", password);

		    api.registerFetch(formData);
    	}
    });
    
	}

	render() {
		return (
			<div className="register">
				<header className="register-header"></header>
				<section className="form-container">
					<div className= "tab-caption text-center active-tab">
						<p>账号注册</p>
					</div>
					<form ref="form">
						<div className="form-item"> 
						  <span className="form-icon"><i className="fa fa-phone"></i></span>
							<input type="text" placeholder="手机号" name="phone" />
						</div>
						<div className="form-item"> 
							<span className="form-icon"><i className="fa fa-user"></i></span>
							<input type="text" placeholder="账户名（6-20位）" name="username" />
						</div>
						<div className="form-item"> 
							<span className="form-icon"><i className="fa fa-lock"></i></span>
							<input type="password" placeholder="密码（6-20位）" name="password" />
						</div>	
						<div className="form-item" onClick={this.submitForm.bind(this)}> 
							<input type="submit" value="注册" className="sign-btn" />
						</div>	
					</form>
					<p className="text-center">已有账号？<Link to="/login" className="color-link">立即登录</Link></p>
					<p className="text-center" style={{color: 'red'}}></p>
				</section>
			</div>
		)
	}

	componentDidMount() {
		
	}
}
