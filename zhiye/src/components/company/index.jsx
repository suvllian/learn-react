import React, {Component} from 'react';
import { Link } from 'react-router';
import api from './../../api/';
require("./index.scss");

export default class Company extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<div className="container" id="company-container">
				<div className="company-left">
					<p>早上好，许忠政</p>
					<div className="row company-deal">
					{
						[1,2,3,4].map((item, index) => 
							<div className="col-md-3">
								<p>0</p>
								<p>新简历</p>
							</div>
						)
					}
					</div>
					<div className="com-main">

					</div>
				</div>
			</div>
		)
	}
}