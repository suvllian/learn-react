import React, {Component} from 'react';

import Nav from './nav.jsx';
import Slider from './slider.jsx';
import AboutTop from './about-top.jsx';
import AboutBottom from './about-bottom.jsx';
import Contact from './contact.jsx';
import Answer from './answer.jsx';
import Download from './download.jsx';
import ServiceInfo from './services-info.jsx';
import Waterfall from './waterfall.jsx';

export default class Home extends Component{
	render() {
		return (
			<div>
				<Nav />
				<Slider />
				<AboutTop />
				<Contact />
				<ServiceInfo />
				<Waterfall />
				<Answer />
				<Download />
				<AboutBottom />	
			</div>
		)
	}
}