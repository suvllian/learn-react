import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPostsIfNeeded } from './../../redux/actions/index.js'

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isPhone: true
		}
	}

	componentDidMount() {
		const { dispatch} = this.props;
		dispatch(fetchPostsIfNeeded('frontend'));
	}	

	render() {
		let isPhone = this.state.isPhone;
		
		const { posts } = this.props
		console.log(posts);
		console.log('数据已经传过来了，哈哈哈，终于成功了');

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
					{this.renderTab()}
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

		let isPhone = this.state.isPhone;
		const { regByPhone } = this.props;

		let formObj = {};
		formObj.username = this.refs.username.value;
		formObj.password = this.refs.username.value;
		// isPhone ? ((formObj.phone = this.refs.phone.value) ? regByPhone(formObj) : "") : 
		// 	((formObj.email = this.refs.email.value) ? regByPhone(formObj) : "") ;
	}

	renderTab() {
		if (this.state.isPhone) {
			return (
				<form>
					<div className="form-item"> 
						<input type="text" placeholder="请输入手机号" ref="phone" />
					</div>
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
			)
		} else {
			return (
				<form>
					<div className="form-item"> 
						<input type="text" placeholder="请输入邮箱" ref="email" />
					</div>
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
			)
		}
	}
}

function mapStateToProps(state) {
	const { postsByReddit } = state
	const { items: posts } = postsByReddit['frontend'] || { items: [] }
	return { posts }
}

export default connect(
	mapStateToProps
)(Register)
