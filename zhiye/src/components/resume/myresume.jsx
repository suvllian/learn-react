import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getResumeResult } from './../../redux/actions/resume.js'

class StuResume extends Component{
	render() {
		return (
			<article className="resume-result row">
				<div className="col-md-8 resume-main">
					<div className="resume-header">
						<img src="" />
					</div>

					<div className="text-center">
						<h2 className="resume-h">张鹏</h2>
						<p>有趣的灵魂终会相遇</p>
						<p>汉语言 · 西北大学</p>
						<p>本科 应届毕业生 北京</p>
						<p>13687902234 1872376660@qq.com</p>
					</div>

					<div className="resume-section">
						<h2><span>实习经历</span></h2>
						<div>
							<p>西安渭源网络科技有限公司</p>
							<p>前端实习生</p>
							<p>负责前端开发。</p>
						</div>
					</div>

					<div className="resume-section">
						<h2><span>教育经历</span></h2>
						<div>
							<p>长安大学</p>
							<p>本科-中文</p>
						</div>
					</div>
				</div>

				<div className="col-md-3 right">
					<section className="resume-link row">
						<div className="col-md-3">
							<p><i className="fa fa-home-3x"></i></p>
							<p>投递</p>
						</div>

						<div className="col-md-3">
							<p><i className="fa fa-home-3x"></i></p>
							<p>邀请函</p>
						</div>

						<div className="col-md-3">
							<p><i className="fa fa-home-3x"></i></p>
							<p>收藏夹</p>
						</div>

						<div className="col-md-3">
							<p><i className="fa fa-home-3x"></i></p>
							<p>订阅栏</p>
						</div>
					</section>
				</div>
			</article>
		)
	}

	componentDidMount() {
		const { dispatch } = this.props;

		dispatch(getResumeResult("id=1"));	
	}
}

function mapStateToProps(state) {
	const { register } = state;
	const { id } = register;
	return { id }
}

export default connect(
	mapStateToProps
)(StuResume)