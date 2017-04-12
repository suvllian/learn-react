import React, {Component} from 'react';

export default class AboutBottom extends Component{
	render() {
		return (
			<div className="about-bottom">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h1 className="section-title">About</h1>
							<div className="col-md-4">	
								<p>Slogan：打动人心 促进生意</p>
								<p>Service：云信鸟是一家位于西安市的全方位服务设计公司，</p>
								<p>为客户和我们自己创建品牌、广告、网站、书籍、海报和包装等。</p>
							</div>
						</div>
						<div className="col-md-6">
							<h1 className="section-title">Contact us</h1>
							<div className="col-md-4">	
								<p>西安市雁塔区东仪路与西部大道什字西南角长泰金帝1-3-2601</p>
								<p>公司电话：029-85566774 / 150 2926 8564</p>
								<p>业务邮箱：info@yunxinniao.com</p>
								<p>招聘邮箱：hr@yunxinniao.com</p>
							</div>
						</div>
					</div>
					<div className="copyright">
						<div className="col-md-6">
							<div className="col-md-4">
								<p>我们更懂得如何创建有用有趣的设计……</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="col-md-4">
								<p>All copyright 2014-2017</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}