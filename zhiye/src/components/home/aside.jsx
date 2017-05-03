import React, {Component} from 'react';
import { Link } from 'react-router';

export default class HomeAside extends Component{
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