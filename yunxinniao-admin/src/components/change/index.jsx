import React, {Component} from 'react';
import { hashHistory, Link } from 'react-router';
import api from './../../api/';

export default class Change extends Component{
	constructor(props) {
		super(props);

		this.state = {
			// 是否选中图片进行上传
			isChange: false,

			// 上传成功
			uploadSuccess: true,

			// 被点击的小图的索引
			index: 0,

			// 是否是小图
			isSmall: 0,

			// 新创建的ID
			id: 0,

			// 传递到后台的ID
			dealId: 0,

			// 大图图片链接
			imageSrc: "http://gw.alicdn.com/tfs/TB1_NDSPVXXXXcUXVXXXXXXXXXX-900-500.jpg",

			// 小图图片链接
			smallImage: []
		}

		this.id = this.props.params.id;
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
						<img src={ "/static/img/" + this.state.imageSrc}   
							onClick={ this.addImage.bind(this, 0, 0)}/>	
						<div className="user-btn">
							<span className="blue-Btn margin">点击替换大图</span>	
						</div>	
					</label>
				</header>
				<div className="image-block">
					{
						this.state.smallImage.map((item, index) => 
							<div className="image-item" key={index} onClick={ this.addImage.bind(this, index+1, 1, item.id)} >
								<label htmlFor="uploadBtn">
									<img src={ "/static/img/" + item.src }  />
									<div className="user-btn">
										<span className="blue-Btn margin">替换第{index+1}张</span>	
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

	// 预览图片的DOM节点
	renderPreViewImg() {
		if (this.state.isChange) {
			return (
				<div className="change-block">
					<img ref="img" />
				</div>
			)
		}
	}

	// 选中图片后出现的两个按钮
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

	// 上传失败提示
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
		let isSmall = this.state.isSmall;

		let id = (isSmall == 0) ? this.id : this.state.dealId;

		// 生成文件名
		let fileName = "";
		fileName = "work-" + this.id + Date.now();

		// 构造formData上传文件并传参
		let fileData = new FormData();
		fileData.append("concrete", "uploadImage");
		fileData.append("myfile", file);
		fileData.append("filename", fileName);
		fileData.append("id", id);
		fileData.append("isSmall", isSmall);

		// 上传文件
		api.uploadImage(fileData, fileName).then(res => {
			res.request.upload.onprogress = (e) => {
				console.log(e);
			}
			if (res.data != 0){
				this.changeState();

				setTimeout(() => {
					let index = this.state.index;
					if(isSmall == 0) {
						let imageSrc = res.data;
						this.setState({ imageSrc: imageSrc });
					} else {
						let smallImage = this.state.smallImage;
						index = index - 1;
						smallImage[index].src = res.data;
						this.setState({ smallImage: smallImage });
					}
					
				}, 666);
			} else{
				this.setState({ uploadSuccess: false});
			}   
		}).catch(err => {
		    this.setState({ uploadSuccess: false});
		});
	}

	addImage(index, bSmall, id) {
		this.setState({ isChange: true });
		this.setState({ index: index });
		this.setState({ isSmall: bSmall });
		this.setState({ dealId: id });
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
		let id = this.props.params.id;

		api.getPicSrc(id).then(res => {
			this.setState({ imageSrc: res.data.src});
		});

		api.getSmallPicId(id).then(res => {
			this.setState({ smallImage: res.data});
		});
		
	}
}