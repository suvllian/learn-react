import React, {Component} from 'react';
import { Link } from 'react-router';
import api from './../../api/';

export default class Change extends Component{
	constructor(props) {
		super(props);

		this.state = {
			isChange: false,
			uploadSuccess: true,
			index: 0
		}
	}

	render() {
		return (
			<div className="image-container">
				<h1 className="container-h">
					<span><Link to="/home">返回</Link></span>
					{ this.renderChange() }
					{ this.renderSuccess() }
				</h1>
				<header className="image-header">
					<label htmlFor="uploadBtn">
						<img src="http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg" 
							onClick={ this.addImage.bind(this, -1)}/>
					</label>
				</header>
				<div className="image-block">
					{
						[1, 2, 3, 4, 5].map((item, index) => 
							<div key={index} onClick={ this.addImage.bind(this, index)} >
								<label htmlFor="uploadBtn">
									<img src="http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg" />
								</label>
							</div>
						)
					}
				</div> 
				{ this.renderPreViewImg() }
				<input id="uploadBtn" type="file" ref="file" onChange={this.preViewImg.bind(this)} />
			</div>
		)
	}

	renderPreViewImg() {
		if (this.state.isChange) {
			return (
				<div className="change-block">
					<img ref="img" />
				</div>
			)
		}
	}

	renderChange() {
		if (this.state.isChange) {
			return (
				<div className="change-button">
					<span className="blue-Btn" onClick={this.upload.bind(this)}>确定</span>
					<span className="blue-Btn" onClick={this.changeState.bind(this)}>取消</span>
				</div>
			)
		}
	}

	renderSuccess() {
		if (!this.state.uploadSuccess) {
			return (
				<span>上传失败</span>
			)
		}
	}

	changeState() {
		this.setState({ isChange: false });
		this.setState({ uploadSuccess: true});
	}

	upload() {
		let file = this.refs.file.files[0];
		let index = this.state.index;
		let fileName = "";

		if(index == 0) {
			fileName = "work-" + this.id;
		} else {
			fileName = "work-" + this.id + "-" + index;
		}

		let fileData = new FormData();
		fileData.append("concrete", "uploadImage");
		fileData.append("myfile", file);
		fileData.append("filename", fileName);

		api.uploadImage(fileData, fileName).then(res => {
			if (res.data == 1){
				this.setState({ isChange: false});
				this.setState({ uploadSuccess: true});
			} else{
				this.setState({ uploadSuccess: false});
			}   
		}).catch(err => {
		    
		});
	}

	addImage(index) {
		this.setState({ isChange: true });
		this.setState({ index: index+1 });

		let url = "";
		if(index == -1) {
			url = "/static/img/work-" + this.id + ".jpg";
		} else {
			url = "/static/img/work-" + this.id + "-" + (index+1) + ".jpg";
		}
		setTimeout(() => {
			this.refs.img.src = url;
		}, 0);
	}

	preViewImg(){
		let file = this.refs.file.files[0];
		let imageDom = this.refs.img;

		let fileReader = new FileReader();
	    fileReader.readAsDataURL(file);
	    fileReader.onload = (oFREvent) => {
	        imageDom.src = oFREvent.target.result;
	    };
	}

	componentDidMount() {
		api.getNumber().then(res => {
			this.id = parseInt(res.data);
		})
	}
}