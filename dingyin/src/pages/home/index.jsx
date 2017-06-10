import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import axios from 'axios'

import Slider from './../slider/';
import Map from './map.jsx';
import Community from './community.jsx';
require("./index.scss");

const sliderImage = [
  {imageSrc: 'slider-1.jpg'},
  {imageSrc: 'slider-2.jpg'},
  {imageSrc: 'slider-3.jpg'},
  {imageSrc: 'slider-4.jpg'},
  {imageSrc: 'slider-5.jpg'},
]

export default class Home extends Component{
	render() {
		return (
			<div className="home">
				<Slider slider={sliderImage}/>
				<div className="container row">
					<Map />
					<Community />
				</div>
			</div>
		)
	}

	getData() {
		let URL = 'http://localhost:3000/users';
		axios.get(URL).then((data) => {
			console.log(data)
		})
	}

  componentDidMount() {
  	this.getData();
  }
}
