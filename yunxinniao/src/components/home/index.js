import React, {Component} from 'react';
import {Link} from 'react-router';
import Slider from './slider.jsx';
import AboutTop from './about-top.jsx';
import AboutBottom from './about-bottom.jsx';
import Contact from './contact.jsx';
import Answer from './answer.jsx';
import Download from './download.jsx';
import ServiceInfo from './services-info.jsx';

export default class Home extends Component{
	render() {
		return (
			<div>
				<Slider />
				<AboutTop />
				<Contact />
				<ServiceInfo />
				<Answer />
				<Download />
				<AboutBottom />
			</div>
		)
	}
}