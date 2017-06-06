import React, {Component} from 'react';
import LiItem from './../item/li-item.jsx';

export default class Slider extends Component{
	constructor(props) {
		super(props);

		this.state = {
			list: [
				{ href: "#about", title: "About"},
				{ href: "#work", title: "Work"},
				{ href: "#answer", title: "Answers"},
				{ href: "#download", title: "Download"}
			],
			currentItem: "#about"
		}

		this.changeItem = this.changeItem.bind(this);
	}

	changeItem(item) {
		this.setState({
			currentItem: item
		})
	}

	render() {
		return (
			<header className="header">
				<div className="container">
					<nav className="nav">
						<LiItem changeItem={this.changeItem} list={this.state.list} currentItem={this.state.currentItem} />
					</nav>
					<div className="logo">
						<a href="http://yunxinniao.com"><span>YUNXINNOA DESIGN LTD.</span></a>
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

		let slideNav = this.throttle(changeNav, 100, 1000);

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