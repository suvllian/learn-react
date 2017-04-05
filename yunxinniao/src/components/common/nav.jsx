import React, {Component} from 'react';
import {Link} from 'react-router';
import './../../style/nav.scss';

export default class Slider extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="header">
				<div className="container">
					<nav className="nav">
						<ul>
							<li className="nav-item"><a href="#" className="active-link">About</a></li>
							<li className="nav-item"><a href="#">Work</a></li>
							<li className="nav-item"><a href="#">Answers</a></li>
							<li className="nav-item"><a href="#">Download</a></li>
						</ul>
					</nav>
					<div className="logo">
						<span>YUNXINNIAO&LINGMEI</span>
					</div>
				</div>
			</header>
		)
	}
}