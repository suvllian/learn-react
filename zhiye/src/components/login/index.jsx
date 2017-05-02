import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Login extends Component{
	render() {
		return (
			<div className="login">
				<header className="login-header">

				</header>

				<section className="login-form">
					<form>
						<div className="form-item"> 
							<input type="text" placeholder="请输入账号" />
						</div>
						<div className="form-item"> 
							<input type="password" placeholder="请输入密码" />
						</div>	
						<div className="form-item"> 
							<input type="submit" value="登录" className="sign-btn"/>
						</div>	
					</form>
					<p>还没有职页网账号？立即注册</p>
				</section>

				<footer>

				</footer>
			</div>
		)
	}
}
