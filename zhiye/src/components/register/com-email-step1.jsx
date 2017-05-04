import React, {Component} from 'react';
import { Link } from 'react-router';

export default class ComEmailStepOne extends Component{
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
					<div className="step-num step-two">
						<span>验证公司邮箱</span>
					</div>
					<div className="step-num step-third">
						<span>填写公司名称</span>
					</div>
				</section>

				<section className="company-register-form">
					<form>
						<div className="form-item">
							<input type="text" placeholder="请输入你的手机号或座机号码" />
							<span>（请填写真实有效的电话号码，方便系统校验使用）</span>
						</div>
						<div className="form-item">
							<input type="text" placeholder="请输入你的公司邮箱" />
							<span>（该邮箱将作为接收简历邮箱，审核通过后不可更改）</span>
						</div>
						<div className="form-item">
							<Link to="register/comTwo">
								<button className="submit-btn" type="submit">下一步</button>
							</Link>
						</div>
						<div className="form-item">
							<span>如有任何问题，请致电：4006-2828-35</span>
						</div>
					</form>
				</section>
			</article>
		)
	}
}