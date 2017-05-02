import React, {Component} from 'react';
import { Link } from 'react-router';
import api from './../../api/';

export default class StudentSlider extends Component{
	constructor(props) {
		super(props);

		this.state = {
			current: 0,
			classArray: ["list-item current", "list-item next", "list-item prev"]
		}
	}

	render() {
		return (
			<section>
				<div className="section-inner">		
					<div className="slide-animate">
						<ul className="slide-list">
							{
								[1, 2, 3].map((item, index) => 
									<li key={index} className={this.state.classArray[index]}>
										<a href="#" target="_blank">
											<img className="list-pic" src={ require("./../../assets/top_l" + item + ".jpg") } />
										</a>
									</li>
								)
							}
						</ul>

						<div className="left-btn"></div>
						<div className="right-btn"></div>

					</div>
				</div>
			</section>
		)
	}
}