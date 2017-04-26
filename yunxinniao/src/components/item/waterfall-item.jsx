import React, {Component} from 'react';
import { createMask } from './../../utils/createMask.js';
import axios from 'axios';

const url = "./static/api/index.php";
// const url = "http://127.0.0.1/api/index.php";

export default class WaterfallItem extends Component{
	constructor(props) {
		super(props);

		this.state = {
			now: 1, 
			imageList: []
		} 	
	}

	render() {
		return (
			<div className="pin" onClick={ this.createBMask.bind(this, this.props.id) }>
				<div className="box">
					<img src={ "/static/img/" + this.props.src } />
				</div>
			</div>
		)
	}

	createBMask(index) {
		let html = '<div class="mask-contain">\
						<div class="mask-image" id="mask-image">\
							<img src="./static/img/' + this.state.imageList[this.state.now-1].src + '">\
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
		this.img = document.querySelector("#mask-image img");

		leftBtn.addEventListener("click", this.prev.bind(this));
		rightBtn.addEventListener("click", this.next.bind(this));
	}

	prev() {
		let nowIndex = this.state.now;
		if (nowIndex == 1) {
			nowIndex = 5;
		} else {
			nowIndex = nowIndex - 1;
		}
		this.changeMaskSrc(nowIndex);
	}

	next() {
		let nowIndex = this.state.now;
		if (nowIndex == 5) {
			nowIndex = 1;
		} else {
			nowIndex = nowIndex + 1;
		}
		this.changeMaskSrc(nowIndex);
	}

	changeMaskSrc(nowIndex) {
		this.setState({ now: nowIndex });
		this.img.src = './static/img/'+ this.state.imageList[nowIndex].src;
	}

	getSmallPicId(id) {
		let urlWithParams = url + "?concrete=getSmallPicId&id=" + id;
		return axios.get(urlWithParams);
	}

	componentDidMount() {
		this.getSmallPicId(this.props.id).then(response => {
			this.setState({ imageList: response.data });
		})
	}
}