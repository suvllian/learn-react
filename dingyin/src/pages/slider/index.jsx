import React, { Component } from 'react';
require("./index.scss");

const Info = [
  { 
  	day: "5/May.2017",
  	emoj: "45%"
  },
  { 
  	day: "4/May.2017",
  	emoj: "47%"
  },
  { 
  	day: "3/May.2017",
  	emoj: "42%"
  },
  { 
  	day: "2/May.2017",
  	emoj: "36%"
  },
  { 
  	day: "1/May.2017",
  	emoj: "38%"
  },
]

export default class Slider extends Component{
	constructor(props) {
		super(props);

		this.sliderImage = this.props.slider;
		this.state = {
			liLength: this.sliderImage.length,
			currentItem: 1,
			infor: Info
		}
	}

	render() {
		return (
			<div className="slider" ref="sliderContainer">
				{this.renderContent()}
				<ul className="slider-items">
				{	
					this.sliderImage.map((item, index) =>
					{
						let klass = ((index+1) == this.state.currentItem) ? 
						  "slider-item slider-active" : "slider-item";
						return (
						  <li className={klass} key={index}>
						    <img src={require("./../../assets/" + item.imageSrc)} />
						  </li>
						)
					})
				}	
				</ul>
				<div className="slider-choose">
					<ul className="choose-items">
					{	
						this.sliderImage.map((item, index) =>
						{
							return (
							  <li key={index} onClick={this.changeActive.bind(this, (index+1))}>
							    <img src={require("./../../assets/" + item.imageSrc)} />
							  </li>
							)
						})
					}
					</ul>
				</div>
			</div>
		)
	}

	changeActive(index) {
		clearInterval(this.handle);
		this.setState({ currentItem: index });
		setTimeout(()=> {
			this.sliderImageAnimation();
		}, 5000);
	}

	renderContent() {
		let currentIndex = this.state.currentItem;
		return (
			<div className="slider-content">
				<p>{Info[currentIndex-1].day}</p>
				<p>积极情感率{Info[currentIndex-1].emoj}</p>
			</div>
		)
	}

	nextIndex() {
		let next = 0,
	        now = this.state.currentItem;
		
		if (now == this.state.liLength) {
			next = 1;
		} else {
			next = now + 1;
		}
		return next;
	}

	nextImage() {
		let index = this.nextIndex();
		this.setState({ currentItem: index });
	}

	sliderImageAnimation() {
		let nextImage = this.nextImage.bind(this);
		this.handle = setInterval(nextImage, 5000);	
	}

	componentDidMount() {
		let width = document.body.clientWidth;
		this.refs.sliderContainer.style.height = 0.43 * width + "px";
		this.sliderImageAnimation();
	}
}