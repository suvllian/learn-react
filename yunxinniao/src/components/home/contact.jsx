import React, {Component} from 'react';
import {Link} from 'react-router';
import './../../style/contact.scss';

export default class Contact extends Component{
	render() {
		return (
			<div className="contact">
				<div className="container">
					<div className="col-md-3">
						<h1 className="section-title">Contact</h1>
						<div className="contact-info">
							<p>中国陕西省西安市雁塔区</p>
							<p>东仪路与西部大道什字西南角</p>
							<p>长泰金帝1-3-2601</p>
						</div>
						<div className="contact-info">
							<p>029-85566774</p>
							<p>15029268564</p>
							<p>info@yunxinniao.com</p>
						</div>
					</div>

					<div className="col-md-9">
						<img className="position" src="http://127.0.0.1/position.jpg" />
					</div>
				</div>
			</div>
		)
	}

	setHeight(){
		let slider = document.querySelector(".contact .col-md-3");
		let positionImg = document.querySelector(".position");

		let height = slider.offsetHeight;
		positionImg.style.height = height + 'px';
	}

	componentDidMount() {
		// this.setHeight();
	}
}