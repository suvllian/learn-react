import React, {Component} from 'react';
import { Link } from 'react-router';

export default class HomeArticle extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<article className="col-md-8 home-article">
				<section className="home-article-top row">
					{
						[5,2,3,4].map((item, index) => 
							<div className="col-md-3" key={index}>
								<img src={require("./../../assets/visitor" + item +".jpg")} />
							</div>
						)
					}
				</section>
				<p className="home-info">企业们在寻找...</p>
			</article>
		)
	}
}