import React, {Component} from 'react';

export default class Waterfall extends Component{
	render() {
		return (
			<div className="waterfall">
				<div className="container">
					<h1 className="section-title">Work</h1>

					<div className="box-contain">
					{
						[1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) =>
							<div className="pin" key={index}>
								<div className="box">
									<img src={ './src/assets/work-' + item + '.jpg' } />
								</div>
							</div>
						)
					}
					</div>
				</div>
			</div>
		);
	}
}