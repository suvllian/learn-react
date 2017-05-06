import React, {Component} from 'react';
import { createMask } from './../../utils/createMask.js';

export default class WaterfallItem extends Component{
	constructor(props) {
		super(props);

		this.state = {
			now: 0,
		} 	
	}

	render() {
		return (
			<div className="pin" onClick={ this.createBMask.bind(this, this.props.big.id) }>
				<div className="box">
					<img src={ "/static/img/" + this.props.big.src } />
				</div>
			</div>
		)
	}

	createBMask(index) {
		let html = '<div class="mask-contain">\
		                <div class="close-btn">\
		                    <i class="fa fa-times fa-2x"></i>\
		                </div>\
						<div class="mask-image">\
							<img id="mask-image" src="./static/img/' + this.props.small[this.state.now].src + '">\
						</div>\
						<div class="slide-action">\
							<div class="slide-action-left">\
								<a class="slide-action-butn" id="left" href="javascript:;">\
									<i class="fa fa-angle-left fa-3x"></i>\
								</a>\
							</div>\
							<div class="slide-action-right">\
								<a class="slide-action-butn" id="right" href="javascript:;">\
									<i class="fa fa-angle-right fa-3x"></i>\
								</a>\
							</div>\
						</div>\
					</div>';
		createMask(html);

		let leftBtn = document.querySelector("#left");
		let rightBtn = document.querySelector("#right");
		this.img = document.querySelector("#mask-image");

		leftBtn.addEventListener("click", this.prev.bind(this));
		rightBtn.addEventListener("click", this.next.bind(this));
	}

	prev() {
		let nowIndex = this.state.now;
		if (nowIndex == 0) {
			nowIndex = 4;
		} else {
			nowIndex = nowIndex - 1;
		}
		this.changeMaskSrc(nowIndex);
	}

	next() {
		let nowIndex = this.state.now;
		if (nowIndex == 4) {
			nowIndex = 0;
		} else {
			nowIndex = nowIndex + 1;
		}
		this.changeMaskSrc(nowIndex);
	}

	changeMaskSrc(nowIndex) {
		this.setState({ now: nowIndex });
		this.img.src = './static/img/'+ this.props.small[nowIndex].src;
	}
}