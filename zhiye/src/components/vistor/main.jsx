import React, {Component} from 'react';
import { Link } from 'react-router';

export default class VisitorArticle extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<article className="col-md-8 visitor-article">
				<section className="visitor-article-top row">
					{
						[5,2,3,4].map((item, index) => 
							<div className="col-md-3">
								<img src={require("./../../assets/visitor" + item +".jpg")} />
							</div>
						)
					}
				</section>
				<p className="visitor-info">企业们在寻找...</p>
			</article>
		)
	}
}