import React, {Component} from 'react';
import { hashHistory, Link } from 'react-router';
import api from './../../api/';

export default class Change extends Component{
	constructor(props) {
		super(props);

		this.state = {
			// 选中图片进行更换
			isChange: false,

			// 更换成功
			uploadSuccess: true,

			// 选中的图片的索引
			index: 0
		}

		// 当前图片的ID
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
						<img src={ require("./../../assets/work-" + this.id + ".jpg") }  
							onClick={ this.addImage.bind(this, -1)}/>
						<div className="user-btn">
							<span className="blue-Btn margin">点击替换大图</span>	
						</div>	
					</label>
				</header>
				<div className="image-block">
					{
						[1, 2, 3, 4, 5].map((item, index) => 
							<div key={index} onClick={ this.addImage.bind(this, index)} >
								<label htmlFor="uploadBtn">
									<img src={require("./../../assets/work-" + this.id + "-" + item + ".jpg")} />
									<div className="user-btn">
										<span className="blue-Btn margin">替换第{item}张</span>	
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
				this.changeState();

				// 上传成功后，刷新当前页面。重新加载图片
				setTimeout(()=> {
					location.reload();
				}, 500);
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
}