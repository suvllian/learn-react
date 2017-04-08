import React, {Component} from 'react';

import Background1 from './../../assets/slider-1.jpg';
import Background2 from './../../assets/slider-2.jpg';
import Background3 from './../../assets/slider-3.jpg';
import Background4 from './../../assets/slider-4.jpg';
import Background5 from './../../assets/slider-5.jpg';

const bg = [
	{ backgroundImage: `url(${Background1})` },
	{ backgroundImage: `url(${Background2})` },
	{ backgroundImage: `url(${Background3})` },
	{ backgroundImage: `url(${Background4})` },
	{ backgroundImage: `url(${Background5})` }
]

export default class Slider extends Component{
	constructor(props) {
		super(props);

		this.state = {
			liLength: 5,
			currentItem: 1
		}
	}

	render() {
		return (
			<div className="slider">
				<ul>
					<li style={bg[0]} className="slider-item slider-active">
						
					</li>

					<li style={bg[1]} className="slider-item">
						
					</li>

					<li style={bg[2]} className="slider-item">
						
					</li>

					<li style={bg[3]} className="slider-item">
						
					</li>

					<li style={bg[4]} className="slider-item">
						
					</li>
				</ul>
			</div>
		)
	}

	
	prevImage() {
		let now = this.state.currentItem;
		let prev = 0;
		if (now == 1) {
			prev = this.state.liLength;
		} else {
			prev = now - 1;
		}
		return prev;
	}

	nextImage() {
		let now = this.state.currentItem;
		let next = 0;
		if (now == this.state.liLength) {
			next = 1;
		} else {
			next = now + 1;
		}
		return next;
	}

	resetSlider() {
		this.slider.forEach((item, index) => {
			item.className = "slider-item";
		});
	}

	slideImage() {
		let index = this.nextImage();
		this.setState({ currentItem: index });
		this.resetSlider();
		this.slider[index-1].className = "slider-item slider-active";
	}

	componentDidMount() {
		this.slider = document.querySelectorAll(".slider-item");
		let slideImage = this.slideImage.bind(this);
		this.handle = setInterval(slideImage, 4000);
	}

}