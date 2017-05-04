import React, {Component} from 'react';
import { Link } from 'react-router';

export default class ComEmailStepThree extends Component{
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
					<div className="step-num step-third step-active">
						<span>填写公司名称</span>
					</div>
				</section>

				<section className="company-register-form">
					<form>
						<div className="form-item">
							<input type="text" placeholder="请输入公司名称" />
							<span>（请填写真实有效的公司名称，方便系统校验使用）</span>
						</div>
						<div className="form-item">
							<input type="text" placeholder="请输入公司地址" />
							<span>（系统将会对公司信息进行审核，审核通过后不可更改）</span>
						</div>
						<div className="form-item">
							<Link to="company">
								<button className="submit-btn" type="submit">开始发布职位</button>
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