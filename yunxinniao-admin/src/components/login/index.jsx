import React, {Component} from 'react';
import { Link, hashHistory } from 'react-router';
import api from './../../api/';

export default class Login extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="login">
				<div className="login-box">		
					<div>
						<h3 className="login-h">后台管理中心</h3>
						<form onSubmit={this.login.bind(this)}>
							<input type="text" className="input-item" placeholder="请输入账号" ref="name" />
							<input type="password" className="input-item" placeholder="请输入密码" ref="pass" />
							<input type="submit" className="submit-btn" value="登陆" />
						</form>	
					</div>
				</div>
			</div>
		)
	}

	login(e) {
		e.preventDefault();
		let name = this.refs.name.value;
		let pass = this.refs.pass.value;
		
		api.login(name, pass).then(res => {
			if (res.data == 1) {
				hashHistory.push("/home");
			} else {	
				console.log("fail");
			}
		})
	}
}