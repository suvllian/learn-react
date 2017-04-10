import React, {Component} from 'react';
import effect from './../../utils/scroll.js';
import LiItem from './../item/li-item.jsx';

const lis = [
	{ isActive: true, href: "#about", title: "About"},
	{ isActive: false, href: "#work", title: "Work"},
	{ isActive: false, href: "#answer", title: "Answers"},
	{ isActive: false, href: "#download", title: "Download"},	
]

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
							{
								lis.map((item, index) => 
									<LiItem key={index} isActive={item.isActive} href={item.href} title={item.title}  />
								)
							}
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

	setNav() {
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

	componentDidMount() {
		this.setNav();
	}
}