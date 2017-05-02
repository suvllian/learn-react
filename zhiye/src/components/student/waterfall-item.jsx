import React, {Component} from 'react';

export default class WaterfallItem extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		} 	
	}

	render() {
		return (
			<div className="pin">
				<div className="box">
					<img src={ "/static/img/" + this.props.id + ".jpg"} />
				</div>
				<div className="info">
					<p>阿里巴巴</p>
				</div>
			</div>
		)
	}
}