import React, {Component} from 'react';
import DownLoadItem from './../item/download-item.jsx';

const infor = [
	{ title: "LOGO and Vision" },
	{ title: "Our Team" },
	{ title: "Our Office" },
	{ title: "Customer List" },
]

export default class Download extends Component{
	render() {
		return (
			<div className="download" id="download">
				<div className="container">
					<header className="download-header">
						<h1 className="section-title">Download</h1>
						<div className="col-md-3">
							<p>如果您正在撰写有关我们的文章，您可以下载并使用我们LOGO和工作的图片，</p>
							<p>如果您想要与我们联系，请发送电子邮件至info@yunxinniao.com。 </p>
						</div>
					</header>

					<div className="row">
						{
							infor.map((item, index) => 
								<DownLoadItem key={index}  title={item.title} value={index} />
							)
						}
					</div>
				</div>
			</div>
		)
	}
}