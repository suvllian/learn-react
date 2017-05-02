import React, {Component} from 'react';
import { Link } from 'react-router';
import api from './../../api/';

import Background from './../../assets/login_bg.jpg';

export default class Home extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		const bgStyle = {
			backgroundImage: `url(${Background})`
		}
		
		return (
			<div className="index-container" style={bgStyle} ref="index">
				<div className="index-content row">
					<Link to="/student"><div className="student col-md-4">
						<p>学生入口</p>
					</div></Link>
					<Link to="/company"><div className="company col-md-4">
						<p>企业入口</p>
					</div></Link>
					<Link to="/visitor"><div className="direct col-md-4">
						<p>进入主页</p>
					</div></Link>			
				</div>
			</div>
		)
	}
}