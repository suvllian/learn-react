import React, {Component} from 'react';
import { Link } from 'react-router';

import WaterfallItem from './waterfall-item.jsx';

export default class WaterFall extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<div className="waterfall" id="work">
				<div className="container">
					<div className="box-contain">
					{
						[1, 2, 3, 4, 6, 7, 8, 9].map((item, index) =>
							<WaterfallItem key={index} id={item} />
						)
					}
					</div>
				</div>
			</div>
		)
	}
}