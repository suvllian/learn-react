import React, {Component} from 'react';
import { Link } from 'react-router';

export default class ComEmailStepTwo extends Component{
	render() {
		return (
			<article className="company-register">
				<div className="banner">
					<h1>Open recruitment service</h1>
					<h2>开通招聘服务</h2>
				</div>
				<section className="step">
					<div className="step-num step-one step-active" >
						<span>填写联系方式</span>
					</div>
					<div className="step-num step-two step-active">
						<span>验证公司邮箱</span>
					</div>
					<div className="step-num step-third">
						<span>填写公司名称</span>
					</div>
				</section>

				<section className="company-register-form">
					<div className="send-email"></div>
					<p className="about-h text-center">验证邮件已发送至：</p>
					<p className="about-h text-center">1448478@ding.com </p>
					<p className="text-center">请登录邮箱点击邮件内的链接，验证后即可<Link className="color-link" to="/register/comThree">发布职位</Link></p>
				</section>

				<section className="company-register-form">
					<h2 className="about-h">没有收到验证邮件，怎么办？</h2>
					<div>
						<p>1.邮箱填写错误？<Link className="color-link" to="/register/comOne">换个邮箱</Link></p>
						<p>2.看看是否在邮箱的垃圾邮件、广告邮件目录里</p>
						<p>3.稍等几分钟，若还未收到验证邮件，<Link className="color-link" to="/register/comOne">重新发送验证邮件邮箱</Link></p>
						<p>4.还未收到验证邮件，请联系我们：gogo@lagou.com，4006-2828-35</p>
					</div>
				</section>
			</article>
		)
	}
}