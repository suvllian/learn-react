import React, {Component} from 'react';
import { Link } from 'react-router';
import api from './../../api/';

export default class Change extends Component{
	constructor(props) {
		super(props);

		this.state = {
			isChange: false,
			uploadSuccess: true,
			index: 0,
			id: 0,
			imageSrc: [
				"http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg",
				"http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg",
				"http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg",
				"http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg",
				"http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg",
				"http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg"
			]
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
						<img src={this.state.imageSrc[0]} 
							onClick={ this.addImage.bind(this, -1)}/>	
						<div className="user-btn">
							<span className="blue-Btn margin">点击上传大图</span>	
						</div>		
					</label>
				</header>
				<div className="image-block">
					{
						[1, 2, 3, 4, 5].map((item, index) => 
							<div key={index} onClick={ this.addImage.bind(this, index)} >
								<label htmlFor="uploadBtn">
									<img src={this.state.imageSrc[item]}  />
									<div className="user-btn">
										<span className="blue-Btn margin">上传第{item}张</span>	
									</div>
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

	// 图片预览DOM节点
	renderPreViewImg() {
		if (this.state.isChange) {
			return (
				<div className="change-block">
					<img ref="img" />
				</div>
			)
		}
	}

	// 更换图片时出现的按钮
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

	// 更换失败提醒
	renderSuccess() {
		if (!this.state.uploadSuccess) {
			return (
				<span>上传失败</span>
			)
		}
	}

	// 更改state
	changeState() {
		this.setState({ isChange: false });
		this.setState({ uploadSuccess: true});
	}

	// 上传图片
	upload() {
		let file = this.refs.file.files[0];
		let index = this.state.index;
		let fileName = "";

		if(index == 0) {
			fileName = "work-" + this.state.id;
		} else {
			fileName = "work-" + this.state.id + "-" + index;
		}

		let fileData = new FormData();
		fileData.append("concrete", "uploadImage");
		fileData.append("myfile", file);
		fileData.append("filename", fileName);

		api.uploadImage(fileData, fileName).then(res => {
			if (res.data == 1){
				this.setState({ isChange: false});
				this.setState({ uploadSuccess: true});

				setTimeout(() => {
					if(index == 0) {
						let imageSrc = this.state.imageSrc;
						imageSrc[this.state.index] = "/static/img/work-" + this.state.id + ".jpg";
						this.setState({ imageSrc: imageSrc });
					} else {
						let imageSrc = this.state.imageSrc;
						imageSrc[this.state.index] = "/static/img/work-" + this.state.id + "-" + this.state.index + ".jpg";
						this.setState({ imageSrc: imageSrc });
					}
				}, 666);
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
			url = "/static/img/work-" + this.state.id + ".jpg";
		} else {
			url = "/static/img/work-" + this.state.id + "-" + (index+1) + ".jpg";
		}
		setTimeout(() => {
			this.refs.img.src = url;
		}, 0);
	}

	// 预览图片
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
			this.setState({ id: parseInt(res.data)});
		})
	}
}