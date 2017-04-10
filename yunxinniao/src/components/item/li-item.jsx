import React, {Component} from 'react';

export default class LiItem extends Component{
	constructor(props) {
		super(props);

		this.state = {
			isActive: this.props.isActive
		} 	

		this.renderLiItem = this.renderLiItem.bind(this);
		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
	}

	renderLiItem() {
		const { href, title } = this.props;

		const itemStyle = {
			color: this.state.isActive ? '#0036ff' : '#909090'
		}

		return (
			<a style={itemStyle} href={href}> { title } </a>
		)
	}

	render() {
		return (
			<li className="nav-item" onMouseEnter={ this.mouseEnter } onMouseLeave={ this.mouseLeave } >
				{this.renderLiItem()}
			</li>
		)
	}

	mouseEnter() {
		this.setState({ isActive: true });
	}	

	mouseLeave() {
		this.setState({ isActive: false });
	}	
}