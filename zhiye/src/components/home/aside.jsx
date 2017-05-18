import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { mapStateToProps } from '../../connect/isLogin.js';
import { loginFunction } from './../../redux/actions/login.js'

class HomeAside extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<aside className="col-md-4 home-aside">
				<section className="home-aside-top">
					<img src={require("./../../assets/zaker.jpg")} />
				</section>

				<section className="home-aside-image">
					<img src={require("./../../assets/visitor1.jpg")} />
				</section>

				<section className="home-aside-form">
					<form>
						<div className="form-item">
						    <label htmlFor="email">EMAIL</label>
						    <input ref="email" type="text" id="email" name="email" placeholder="请输入邮箱" />
						</div>
						<div className="form-item">
						    <label htmlFor="password">PASSWORD</label>
						    <input ref="password" type="password" id="password" name="password" placeholder="请输入密码" />
						</div>
						<div className="form-item" onClick={this.login.bind(this)}>
							<input type="submit" value="SIGN IN" className="sign-btn" />
						</div>
					</form>
				</section>
			</aside>
		)
	}

	login(e) {
		e.preventDefault();

		const { dispatch } = this.props;
		let email = this.refs.email.value,
		    password = this.refs.password.value,
	        formData = new FormData();

	    formData.append("email", email);
	    formData.append("password", password);

	    dispatch(loginFunction(formData));	
	}
}

export default connect(mapStateToProps)(HomeAside)