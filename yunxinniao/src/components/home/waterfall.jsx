import React, {Component} from 'react';
import WaterfallItem from './../item/waterfall-item.jsx';

export default class Waterfall extends Component{
	render() {
		return (
			<div className="waterfall" id="work">
				<div className="container">
					<h1 className="section-title">Work</h1>

					<div className="box-contain">
					{
						[1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) =>
							<WaterfallItem key={index}  index={item} />
						)
					}
					</div>
				</div>
			</div>
		);
	}

	
}