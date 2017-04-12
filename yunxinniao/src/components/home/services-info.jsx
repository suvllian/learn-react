import React, {Component} from 'react';

export default class ServiceInfo extends Component{
	render() {
		return (
			<div className="service-info">
				<div className="container">
					<h1 className="section-title">Services</h1>
					<ul>
						<li className="col-md-4">
							<p>咨询 Consultancy</p>
							<p>标识 Logo</p>
							<p>品牌故事 Brand Story</p>
							<p>品牌形象 Branding</p>
							<p>广告 Advertising</p>
						</li>
						
						<li className="col-md-4">
							<p>宣传册 The Brochure </p>
							<p>活动策划 Event Planning</p>
							<p>展览 Exhibition Design</p>
							<p>包装 Packaging Design</p>
							<p>印刷 Print</p>
						</li>

						<li className="col-md-4">
							<p>数字营销 Digital Marketing </p>
							<p>网站 Website </p>
							<p>交互设计 Interactive</p>
							<p>社交媒体运营 Social Media Strategy</p>
							<p>摄影 Photography  </p>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}