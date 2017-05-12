import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { fillResumeStepTwo } from './../../redux/actions/resume.js'

class StuResumeStepTwo extends Component{
	render() {
		return (
			<article className="about">
				<h2 className="about-title">
					教育经历
				</h2>
				<form>
					<div className="form-item"> 
						<input type="text" placeholder="学校名称" ref="school" />
					</div>
					<div className="form-item"> 
						<input type="text" placeholder="所学专业" ref="major" />
					</div>
					<div className="form-item row"> 
						<div className="col-md-5">
							<input type="text" placeholder="本科" ref="degree" />
						</div>
						<div className="col-md-5 right">
							<input type="text" placeholder="毕业年份" ref="graduate" />
						</div>
					</div>
					<div className="form-item"> 
						<a className="color-link">添加更多教育经历</a>
					</div>
					<div className="form-item"> 
						<input type="submit" value="下一步：实习经历" className="sign-btn" 
							onClick={this.getFormData.bind(this)}  />
					</div>	
				</form>
			</article>
		)
	}

	getFormData(e) {
		e.preventDefault();

		const { dispatch, id } = this.props;
		let formData = new FormData();

		formData.append("id", id);
		formData.append("school", this.refs.school.value);
		formData.append("major", this.refs.major.value);
		formData.append("degree", this.refs.degree.value);
		formData.append("graduate", this.refs.graduate.value);

		dispatch(fillResumeStepTwo(formData));	
	}
}

function mapStateToProps(state) {
	const { register } = state;
	const { id } = register;
	return { id }
}

export default connect(
	mapStateToProps
)(StuResumeStepTwo)