import React, {Component} from 'react';
import { Link } from 'react-router';

export default class StuResumeStepTwo extends Component{
	render() {
		return (
			<article className="about">
				<h2 className="about-title">
					教育经历
				</h2>
				<form>
					<div className="form-item"> 
						<input type="text" placeholder="学校名称" />
					</div>
					<div className="form-item"> 
						<input type="text" placeholder="所学专业" />
					</div>
					<div className="form-item row"> 
						<div className="col-md-5">
							<input type="text" placeholder="本科" />
						</div>
						<div className="col-md-5 right">
							<input type="text" placeholder="毕业年份" />
						</div>
					</div>
					<div className="form-item"> 
						<a className="color-link">添加更多教育经历</a>
					</div>
					<div className="form-item"> 
						<Link to="resume/stuThree">
							<input type="submit" value="下一步：实习经历" className="sign-btn" />
						</Link>
					</div>	
				</form>
			</article>
		)
	}
}