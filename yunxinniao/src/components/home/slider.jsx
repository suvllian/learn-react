import React, {Component} from 'react';

import Background1 from './../../assets/slider-1.jpg';
import Background2 from './../../assets/slider-2.jpg';
import Background3 from './../../assets/slider-3.jpg';
import Background4 from './../../assets/slider-4.jpg';
import Background5 from './../../assets/slider-5.jpg';

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
				<ul className="slider-items">
					<li className="slider-item slider-active">
						<img src={ Background1 } />
					</li>
					<li className="slider-item">
						<img src={ Background2 } />
					</li>
					<li className="slider-item">
						<img src={ Background3 } />
					</li>
					<li className="slider-item">
						<img src={ Background4 } />
					</li>
					<li className="slider-item">
						<img src={ Background5 } />
					</li>			
				</ul>
			</div>
		)
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
		let sliderContain = document.querySelector(".slider");
		this.slider = document.querySelectorAll(".slider-item");
		let slideImage = this.slideImage.bind(this);
		this.handle = setInterval(slideImage, 4000);

		let width = document.body.clientWidth;
		sliderContain.style.height = 0.43 * width + "px";
	}

}