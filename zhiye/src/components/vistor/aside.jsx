import React, {Component} from 'react';
import { Link } from 'react-router';

export default class VisitorAside extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<aside className="col-md-4 visitor-aside">
				<section className="visitor-aside-top">
					<img src={require("./../../assets/zaker.jpg")} />
				</section>

				<section className="visitor-aside-image">
					<img src={require("./../../assets/visitor1.jpg")} />
				</section>

				<section className="visitor-aside-form">
					<form>
						<div className="form-item">
						    <label htmlFor="username">EMAIL</label>
						    <input type="text" id="username" name="username" placeholder="请输入账号" />
						</div>
						<div className="form-item">
						    <label htmlFor="password">PASSWORD</label>
						    <input type="password" id="password" name="password" placeholder="请输入密码" />
						</div>
						<div className="form-item">
							<input type="submit" value="SIGN IN" className="sign-btn" />
						</div>
					</form>
				</section>
			</aside>
		)
	}
}