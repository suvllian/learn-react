import React, {Component} from 'react';
import { Link } from 'react-router';

export default class About extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<article className="about">
				<section className="row">
					<div className="col-md-4">
						<img className="response-img" src={require("./../../assets/topbg.jpg")} />
					</div>

					<div className="col-md-8">
						<p className="color-bg">
							职页网（隶属于职页网络科技有限公司）是专注互联网职业机会的招聘网站，以众多优质互联网资源为依托，发布圈内招聘信息，为求职者提供人性化、个性化、专业化的信息服务，以让优质人才和优秀企业及时相遇为己任。我们是一个热爱互联网的年轻团队，我们用责任来做这件事情，致力于打造最专业的互联网招聘平台。
						</p>
					</div>
				</section>

				<section className="row">
					<div className="col-md-4 color-bg">
						<p>商务合作</p>
						<p>邮箱：</p>
						<p>SuvllianSong@163.com</p>
					</div>

					<div className="col-md-8">
						<div className="color-bg">
							<p>客户服务中心</p>
							<p>费用咨询： hello@dingtalk.com    使用帮助： hello@dingtalk.com</p>
							<p>客服热线：400-400-4000</p>
							<p>地址：长安大学渭水校区</p>
						</div>
					</div>
				</section>

				<section className="color-bg">
					<p>服务热线：Service Hotline</p>
					<p>400-400-4000</p>
				</section>
			</article>
		)
	}
}