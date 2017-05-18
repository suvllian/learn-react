import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { fillResumeStepThree } from './../../redux/actions/resume.js'
import { mapStateToProps } from '../../connect/register.js'

class StuResumeStepThird extends Component{
	render() {
		return (
			<article className="about">
				<h2 className="about-title">
					实习经历
				</h2>
				<form>
					<div className="form-item"> 
						<input type="text" placeholder="实习公司名称" ref="company" />
					</div>
					<div className="form-item"> 
						<input type="text" placeholder="实习职位" ref="job" />
					</div>
					<div className="form-item row"> 
						<div className="col-md-5">
							<input type="text" placeholder="起始时间" ref="startTime" />
						</div>
						<div className="col-md-5 right">
							<input type="text" placeholder="结束时间" ref="endTime" />
						</div>
					</div>
					<div className="form-item"> 
						<a className="color-link">添加更多实习经历</a>
					</div>
					<div className="form-item"> 
						<input type="submit" value="最后一步：一句话介绍" className="sign-btn"
							onClick={this.getFormData.bind(this)} />
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
		formData.append("step", "three");
		formData.append("company", this.refs.company.value);
		formData.append("job", this.refs.job.value);
		formData.append("startTime", this.refs.startTime.value);
		formData.append("endTime", this.refs.endTime.value);

		dispatch(fillResumeStepThree(formData));	
	}
}

export default connect(mapStateToProps)(StuResumeStepThird)