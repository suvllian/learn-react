import React, {Component} from 'react';
import { Link } from 'react-router';

export default class StuResumeStepOne extends Component{
	render() {
		return (
			<article className="about">
				<h2 className="about-title">
					基本信息
				</h2>
				<form>
					<div className="form-item"> 
						<input type="text" placeholder="姓名" />
					</div>
					<div className="form-item row"> 
						<div className="col-md-5">
							<input type="text" placeholder="最高学历" />
						</div>
						<div className="col-md-5 right">
							<input type="text" placeholder="工作年限" />
						</div>
					</div>
					<div className="form-item"> 
						<input type="text" placeholder="手机号" />
					</div>
					<div className="form-item"> 
						<input type="password" placeholder="邮箱" />
					</div>	
					<div className="form-item"> 
						<input type="text" placeholder="所在城市" />
					</div>
					<div className="form-item"> 
						<Link to="resume/stuTwo">
							<input type="submit" value="下一步，继续完善职业信息" className="sign-btn" />
						</Link>
					</div>	
				</form>
			</article>
		)
	}
}