import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { fillResumeStepFour } from './../../redux/actions/resume.js'
import { mapStateToProps } from '../../connect/register.js'

class StuResumeStepFour extends Component{
	render() {
		return (
			<article className="about">
				<h2 className="about-title">
					介绍自己
				</h2>
				<form>
					<div className="form-item"> 
						<textarea type="text" placeholder="一句话介绍自己" ref="words"></textarea>
					</div>
					<div className="form-item"> 
						<input type="submit" value="创建完成" className="sign-btn" 
							onClick={this.getFormData.bind(this)}/>
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
		formData.append("step", "four");
		formData.append("words", this.refs.words.value);

		dispatch(fillResumeStepFour(formData));	
	}
}


export default connect(mapStateToProps)(StuResumeStepFour)