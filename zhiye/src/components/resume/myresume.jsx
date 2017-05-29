import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getResumeResult } from './../../redux/actions/resume.js'
import { mapStateToProps } from '../../connect/resume.js';

class StuResume extends Component{
	render() {
		const { name, email, phone, username, highestDegree,
		  workYears, city, education, work, words } = this.props;

		return (
			<article className="resume-result row">
				<div className="col-md-8 resume-main">
					<div className="resume-header">
						<img src="" />
					</div>

					<div className="text-center">
						<h2 className="resume-h">{name}</h2>
						<p>{words}</p>
						<p>{education.major} · {education.school}</p>
						<p>{education.degree} 应届毕业生 {city}</p>
						<p>{email || phone}</p>
					</div>

					<div className="resume-section">
						<h2><span>实习经历</span></h2>
						<div>
							<p>公司：{work.company}</p>
							<p>担任职位：{work.job}</p>
							<p>任职时间：{work.startTime}——{work.endTime}</p>
						</div>
					</div>

					<div className="resume-section">
						<h2><span>教育经历</span></h2>
						<div>
							<p>{education.school}</p>
							<p>{education.degree}-{education.major}</p>
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
		const { dispatch, id } = this.props;

		let data = "id=" + id;
		dispatch(getResumeResult(data));	
	}
}

export default connect(mapStateToProps)(StuResume)