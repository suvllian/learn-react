import React, {Component} from 'react';
import WaterfallItem from './../item/waterfall-item.jsx';
import axios from 'axios';

export default class Waterfall extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			imageLists: [],
			page: 1, 
			isMore: true
		}

		// this.getMoreImage = this.getMoreImage.bind(this);
	}


	render() {
		return (
			<div className="waterfall" id="work">
				<div className="container">
					<h1 className="section-title">Work</h1>

					<div className="box-contain">
					{
						this.state.imageLists.map((item, index) =>
							<WaterfallItem key={index}  {...item} />
						)
					}
					</div>
					{this.renderLink()}
				</div>
			</div>
		);
	}

	renderLink() {
		if (this.state.isMore) {
			return (
				<h2 className="more" onClick={ this.getMoreImage.bind(this) }>查看更多</h2>
			)
		} else {
			return (
				<h2 className="more">没有更多内容了...</h2>
			)
		}
	}

	getMoreImage() {
		let page = this.state.page + 1;
		let imageLists = this.state.imageLists;

		this.setState({ page: page});
		this.getImageList(page).then(response => {
			let result = this.getArray(imageLists, response.data, page);
			this.setState({ imageLists: result });
		}).catch(error => {
			console.log(error);
		});
	}

	getImageList(page) {
		let url = "http://yunxinniao.com/api/index.php?do=getImage&page=" + page;
		return axios.get(url);
	}


	getArray(array1, array2, page) {
		let section = (page - 1) * 2;
		let originallength = array1.length;
		let newLength = array2.length;

		let originalFirst = array1.slice(0, (originallength / 2));
		let originalLast = array1.slice((originallength / 2), originallength);
		let newFirst = array2.slice(0, Math.floor(newLength / 2));
		let newLast = array2.slice(Math.floor(newLength / 2), newLength);

		let array = originalFirst.concat(newFirst, originalLast, newLast);

		if ( newLength < 12) {
			this.setState({ isMore: false });
		}

		return array;
	}

	componentWillMount() {
		this.getImageList(1).then(response => {
			this.setState({ imageLists: response.data});
		}).catch(error => {
			console.log(error);
		})
	}
}