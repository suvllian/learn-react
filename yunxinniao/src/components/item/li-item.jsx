import React, {Component} from 'react';

export default class LiItem extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		let selectdStyle = {
			color: '#0036ff'
		}
		return (
			<ul>
			{
				(function(){
					return this.props.list.map((item, index) => {
						let itemStyle = (item.href == this.props.currentItem) ? selectdStyle : {};
						return (<li key={index} className="nav-item" onMouseEnter={this.changeActiveItem.bind(this,item.href)}  
								onMouseLeave={this.changeActiveItem.bind(this, "#about")}>
							<a style={itemStyle} href={item.href}> { item.title } </a>
						</li>)
					})
				}.bind(this))()
			}	
			</ul>
		)
	}

	changeActiveItem(item) {
		this.props.changeItem(item);
	}
}