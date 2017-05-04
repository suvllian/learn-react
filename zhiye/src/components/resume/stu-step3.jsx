import React, {Component} from 'react';
import { Link } from 'react-router';

export default class StuResumeStepThird extends Component{
	render() {
		return (
			<article className="about">
				<h2 className="about-title">
					实习经历
				</h2>
				<form>
					<div className="form-item"> 
						<input type="text" placeholder="实习公司名称" />
					</div>
					<div className="form-item"> 
						<input type="text" placeholder="实习职位" />
					</div>
					<div className="form-item row"> 
						<div className="col-md-5">
							<input type="text" placeholder="起始时间" />
						</div>
						<div className="col-md-5 right">
							<input type="text" placeholder="结束时间" />
						</div>
					</div>
					<div className="form-item"> 
						<a className="color-link">添加更多实习经历</a>
					</div>
					<div className="form-item"> 
						<Link to="resume/stuFour">
							<input type="submit" value="最后一步：一句话介绍" className="sign-btn" />
						</Link>
					</div>	
				</form>
			</article>
		)
	}
}