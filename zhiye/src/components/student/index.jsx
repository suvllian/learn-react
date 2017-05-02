import React, {Component} from 'react';
import { Link } from 'react-router';

import Slider from './slider.jsx';
import WaterFall from './waterfall.jsx';

export default class Student extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<div>
				<Slider />
				<div className="student-line">

				</div>
				<WaterFall />
			</div>
		)
	}
}