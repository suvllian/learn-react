import { connect } from 'react-redux';
import React, { Component,PropTypes } from 'react';
import { Link } from 'react-router';

class StuEmailStepOne extends Component{
	render() {
		const { phone, email } = this.props;
		return (
			<article className="about">
				<h2 className="about-title">
					邮箱验证
				</h2>
				<section className="about-block border-bottom">
					<h2 className="about-h">验证邮箱，完成注册</h2>
					<p>我们已将验证邮件发送至邮箱：<a>或</a></p>{phone}
					<p>点击邮件内的链接即可完成注册，并可使用职页网所有功能。 </p>
					<Link className="submit-btn" to="/register/stuTwo">登录邮箱验证</Link>
				</section>

				<section className="about-block">
					<h2 className="about-h">没有收到验证邮件，怎么办？</h2>
					<p>邮箱填写错误？<a className="color-link" href="#" target="_blank">换个邮箱</a></p>
					<p>看看是否在邮箱的垃圾邮件、广告邮件目录里</p>
					<p>稍等几分钟，若还未收到验证邮件， <a className="color-link" href="#" target="_blank">重新发送验证邮件邮箱</a></p>
				</section>
			</article>
		)
	}
}

const getInfo = state => {
    return {
        phone: state.register.phone,
        email: state.register.email
    }
}

export default connect(getInfo)(StuEmailStepOne)
