import React, {Component} from 'react';
import { Link } from 'react-router';

export default class StuResumeStepFour extends Component{
	render() {
		return (
			<article className="about">
				<h2 className="about-title">
					介绍自己
				</h2>
				<form>
					<div className="form-item"> 
						<textarea type="text" placeholder="一句话介绍自己" ></textarea>
					</div>
					<div className="form-item"> 
						<Link to="resume/myResume">
							<input type="submit" value="创建完成" className="sign-btn" />
						</Link>
					</div>	
				</form>
			</article>
		)
	}
}