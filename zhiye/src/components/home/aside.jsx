import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { mapStateToProps } from '../../connect/isLogin.js'
import { loginFunction } from './../../redux/actions/login.js'

class HomeAside extends Component{
	render() {
		let { loginId } = this.props 
		return (
			<aside className="col-md-4 home-aside">
				<section className="home-aside-top">
					<img src={require("./../../assets/zaker.jpg")} />
				</section>

				<section className="home-aside-image">
					<img src={require("./../../assets/visitor1.jpg")} />
				</section>

				<section className="home-aside-form">
					{this.renderForm()}
				</section>
			</aside>
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

	renderForm() {
		let { id } = this.props 
		if (!id) {
			return (
				<form>
					<div className="form-item">
					    <label htmlFor="username">手机号</label>
					    <input ref="username" type="text" id="username" name="username" placeholder="请输入手机号" />
					</div>
					<div className="form-item">
					    <label htmlFor="password">密码</label>
					    <input ref="password" type="password" id="password" name="password" placeholder="请输入密码" />
					</div>
					<div className="form-item" onClick={this.login.bind(this)}>
						<input type="submit" value="登录" className="sign-btn" />
					</div>
				</form>
			)
		}
	}
}

export default connect(mapStateToProps)(HomeAside)