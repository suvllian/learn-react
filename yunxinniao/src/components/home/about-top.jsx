import React, {Component} from 'react';
import {Link} from 'react-router';
import './../../style/about.scss';

export default class AboutTop extends Component{
	render() {
		return (
			<div className="about-top">
				<div className="container">
					<div className="col-md-3">
						<h1 className="section-title">About</h1>
						<h1 className="section-title">Yinxinniao&Lingmei</h1>
					</div>

					<div className="col-md-9">
						<p>我们成立于2014年10月，致力于数字媒体与广告及活动营销业务相结合，<br/>
							提供从品牌建立之初到数字及活动营销在内的一站式传播服务。<br/>
							目前，已与中国移动、曲江新区、西北政法大学等知名品牌建立了长期业务合作伙伴关系……
						</p>
					</div>
				</div>
			</div>
		)
	}
}