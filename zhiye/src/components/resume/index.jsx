import React, {Component} from 'react';

export default class Resume extends Component{
	render() {
		return (
			<div className="resume">
				{this.props.children}
			</div>
		)
	}
}