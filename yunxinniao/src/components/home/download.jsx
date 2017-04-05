import React, {Component} from 'react';
import {Link} from 'react-router';
import './../../style/download.scss';

export default class Download extends Component{
	render() {
		return (
			<div className="download">
				<div className="container">
					<header>
						<h1 className="section-title">Download</h1>
						<p>如果您正在撰写有关我们的文章，您可以下载并使用我们LOGO和工作的图片，</p>
						<p>如果您想要与我们联系，请发送电子邮件至info@yunxinniao.com。 </p>
					</header>

					<div className="row">
						<div className="col-md-6">
							<div>
								<img src="http://127.0.0.1/download-1.png" />
							</div>
							<p>
								LOGO and Vision
							</p>
						</div>
						<div className="col-md-6">
							<div>
								<img src="http://127.0.0.1/download-2.jpg" />
							</div>
							<p>
								Our Team
							</p>
						</div>

						<div className="col-md-6">
							<div>
								<img src="http://127.0.0.1/download-3.jpg" />
							</div>
							<p>
								Our Office
							</p>
						</div>

						<div className="col-md-6">
							<div>
								<img src="http://127.0.0.1/download-4.jpg" />
							</div>
							<p>
								Customer List
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}