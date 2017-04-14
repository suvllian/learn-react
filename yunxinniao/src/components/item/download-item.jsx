import React, {Component} from 'react';

export default class DownloadItem extends Component{
	constructor(props) {
		super(props);

		this.infor = this.props;
	}

	downFile(e) {
		e.preventDefault();
		let filename = "";
		if ( this.infor.value == 3) {
			filename = "our-works.zip";
		} else {
			filename = "yunxinniao.zip";
		}
		let url = "http://yunxinniao.com/static/file/filedown.php?filename=" + filename;
		window.open(url);
	}

	render() {
		return (
			<div className="col-md-6">
				<a href="#" onClick={this.downFile.bind(this)}>
					<div className="image-block">
						<img src={ require("./../../assets/download-" + (this.infor.value+1) + ".jpg") } />
						<div className="hover-title">
							<h4>点击下载</h4>
						</div>
					</div>
				</a>
				<p>
					{ this.infor.title }
				</p>
			</div>
		)
	}
}