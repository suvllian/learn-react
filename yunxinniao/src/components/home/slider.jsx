import React, {Component} from 'react';
import {Link} from 'react-router';
import './../../style/slider.scss';
import Background from './../../assets/slider-1.jpg';


const bg = {
	backgroundImage: `url(${Background})`
};

export default class Slider extends Component{
	constructor(props) {
		super(props);

		this.state = {
			liLength: 6,
			currentItem: 1
		}
	}

	render() {
		return (
			<div className="slider">
				<ul>
					<li id="slider-1" style={bg} className="slider-item slider-active">
						
					</li>

					<li id="slider-2" className="slider-item">
						
					</li>

					<li id="slider-3" className="slider-item">
						
					</li>

					<li id="slider-4" style={bg} className="slider-item">
						
					</li>

					<li id="slider-5" className="slider-item">
						
					</li>

					<li id="slider-6" className="slider-item">
						
					</li>
				</ul>
				<ol className="slider-control">
					<li>
						<a href="#" className="a-active"></a>
					</li>
					<li>
						<a href="#"></a>
					</li>
					<li>
						<a href="#"></a>
					</li>
					<li>
						<a href="#"></a>
					</li>
					<li>
						<a href="#"></a>
					</li>
					<li>
						<a href="#"></a>
					</li>
				</ol>
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
		this.sliderControl.forEach((item, index) => {
			item.className = "";
		});
	}

	slideImage() {
		let index = this.nextImage();
		this.setState({ currentItem: index });
		this.resetSlider();
		this.slider[index-1].className = "slider-item slider-active";
		this.sliderControl[index-1].className = "a-active";
	}

	goIndex(index) {
		this.resetSlider();
		this.slider[index-1].className = "slider-item slider-active";
		this.sliderControl[index-1].className = "a-active";
	}

	componentDidMount() {
		this.slider = document.querySelectorAll(".slider-item");
		this.sliderControl = document.querySelectorAll(".slider-control li a");
		let slideImage = this.slideImage.bind(this);
		let goIndex = this.goIndex.bind(this);

		this.sliderControl.forEach((item, index) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();
				clearInterval(this.handle);
				this.setState({ currentItem: index+1 });
				goIndex(index+1);
				this.handle = setInterval(slideImage, 4000);
			});
		})

		this.handle = setInterval(slideImage, 4000);
	}

}