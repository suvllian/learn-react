import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeArticle extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<article className="col-md-8 home-article">
				<section className="home-article-top row">
					{
						[5,2,3,4].map((item, index) => 
							<div className="col-md-3" key={index}>
								<img src={require("./../../assets/visitor" + item +".jpg")} />
							</div>
						)
					}
				</section>
				<p className="home-info">企业们在寻找...</p>
				<section>
					<ul>
					{
						[0,1,2,3,4,5].map((item, index) => 
							<li className="pli-item" key={index}>
								<div className="pli-top row">
									<div className="pli-top-left col-md-6">
										<h2 className="pli-top-h">PHP高级开发工程师</h2>
										<p className="pli-top-p">
											<span>15k-20k</span>
											<span>经验1-3年/</span>
											<span>本科</span>
										</p>
									</div>
									<div className="pli-top-right col-md-6">
										<h2 className="pli-top-h">杭州职页网络科技有限公司</h2>
										<p>
											<span>企业服务，金融/</span>
											<span>A轮</span>
										</p>
									</div>
								</div>

								<div className="pli-bottom row">
									<div className="pli-bottom-left col-md-6">
										<span>后端</span>
										<span>网站开发</span>
									</div>
									<div className="pli-bottom-right col-md-6">“社保,员工旅游,年终奖金,餐饮补贴”</div>
								</div>
							</li>
						)
					}
					</ul>
				</section>
			</article>
		)
	}
}