import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fillResumeStepOne } from './../../redux/actions/resume.js'
import { mapStateToProps } from '../../connect/register.js'

class StuResumeStepOne extends Component{
	render() {
		return (
			<article className="about">
				<h2 className="about-title">
					基本信息
				</h2>
				<form>
					<div className="form-item"> 
						<input type="text" placeholder="姓名" ref="realName" />
					</div>
					<div className="form-item row"> 
						<div className="col-md-5">
							<input type="text" placeholder="最高学历" ref="highestDegree" />
						</div>
						<div className="col-md-5 right">
							<input type="text" placeholder="工作年限" ref="year" />
						</div>
					</div>
					<div className="form-item"> 
						<input type="text" placeholder="手机号" ref="phone" />
					</div>
					<div className="form-item"> 
						<input type="text" placeholder="邮箱" ref="email" />
					</div>	
					<div className="form-item"> 
						<input type="text" placeholder="所在城市" ref="city" />
					</div>
					<div className="form-item"> 
						<input type="submit" value="下一步，继续完善职业信息" className="sign-btn"
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
		formData.append("step", "one");
		formData.append("name", this.refs.realName.value);
		formData.append("highestDegree", this.refs.highestDegree.value);
		formData.append("year", this.refs.year.value);
		formData.append("phone", this.refs.phone.value);
		formData.append("email", this.refs.email.value);
		formData.append("city", this.refs.city.value);

		dispatch(fillResumeStepOne(formData));	
	}
}

export default connect(mapStateToProps)(StuResumeStepOne)