import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Bottom extends Component{
	render() {
		return (
			<footer className="footer">
				<div className="container row">
					<div className="col-md-5">
						<h2>版权声明</h2>
						<p>Copyright@2017. All rights reserverd</p>
						<p>人说闻高山流水觅知音，而我们却只想遇见你</p>
					</div>
					<div className="col-md-3">
						<h2>关于我们</h2>
						<p>关于定音</p>
						<p>联系我们</p>
						<p>加入我们</p>
					</div>
					<div className="col-md-4">
						<h2>我们提供</h2>
						<p>旅游资讯 情感地图</p>
						<p>异国共享 情感日记</p>
						<p>旅游推荐 实时交流</p>
					</div>
				</div>
			</footer>
		)
	}
}
