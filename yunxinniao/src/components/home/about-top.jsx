import React, {Component} from 'react';

export default class AboutTop extends Component{
	render() {
		return (
			<div className="about-top" id="about">
				<div className="container row">
					<div className="col-md-3">
						<p className="section-title">About</p>
						<p className="section-title">Yunxinniao Design Ltd.</p>
					</div>
					<div className="col-md-4">
						<p>云信鸟成立于2014年10月，我们致力于设计与活动营销业务相结合，</p>
						<p>提供从品牌建立之初到营销活动在内的一站式传播服务。</p>
						<p>目前，已与聚利银行、农商银行、曲江新区、西北政法大学、日医集团等</p>
						<p>知名品牌建立了长期业务合作伙伴关系……</p>
					</div>
				</div>
			</div>
		)
	}
}