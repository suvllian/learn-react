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
						<a href="http://yunxinniao.com"><span>YUNXINNIAO&LINGMEI</span></a>
					</div>
				</div>
			</header>
		)
	}

	/* 函数节流 */
	throttle(fn, time, atLeast) {
	    let timeHandle, startTime = new Date();
	    return function(){
	        var curTime = new Date();
	        clearTimeout(timeHandle);
	        if (curTime - startTime >= atLeast) {
	            fn();
	            startTime = curTime;
	        } else {
	            timeHandle = setTimeout(fn, time);
	        }
	    }
	}

	componentDidMount() {
		let header = document.querySelector(".header");

		window.addEventListener("scroll", function(){
			slideNav();
		});

		window.onscroll = function(){
			slideNav();
		};

		let slideNav = this.throttle(changeNav,100,1000);

		function changeNav() {
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (scrollTop > 100 ) {
				header.className = "header active-nav";
			} else {
				header.className = "header";
			}
		}
	}
}