import React, {Component} from 'react';
import WaterfallItem from './../item/waterfall-item.jsx';
import axios from 'axios';

const url = "./static/api/index.php";
// const url = "http://127.0.0.1/api/index.php";

export default class Waterfall extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			imageLists: [],
			page: 1, 
			isMore: true
		}

		this.getMoreImage = this.getMoreImage.bind(this);
		this.downFile = this.downFile.bind(this);
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
				<h2 className="more"><a href="#download" onClick={ this.downFile }>下载Customer List获取更多案例</a></h2>
			)
		}
	}

	downFile(e) {
		e.preventDefault();
		let url = "http://yunxinniao.com/static/file/filedown.php?filename=our-works.zip";
		window.open(url);
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
		let urlWithParams = url + "?concrete=getImage&page=" + page;
		return axios.get(urlWithParams);
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

	componentDidMount() {
		this.getImageList(1).then(response => {
			this.setState({ imageLists: response.data});
		}).catch(error => {
			console.log(error);
		})
	}
}