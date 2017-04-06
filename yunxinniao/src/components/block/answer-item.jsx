import React, {Component} from 'react';
import {Link} from 'react-router';
import './../../style/answer.scss';

export default class AnswerItem extends Component{
	constructor(props) {
		super(props);

		this.state = {
			show: false
		} 	
	}

	render() {
		return (
			<div className="panel panel-default">
				<div>
					<h4>
						<div className="row">
							<div className="col-md-1">
								<p>0{ this.props.value+1 }.</p>
							</div>
							<div className="col-md-11">
								<p className="panel-head" onClick={ this.showAnswer.bind(this) }>
									特别是打造品牌项目有什么兴奋？他们弯曲不同的肌肉吗?
								</p>
								<div className="add-icon">

								</div>
							</div>
						</div>	
					</h4>
				</div>
				<div className="panel-body"  style={{height: this.state.show ? '110px' : '0px'}}>
					<div className="row">
						<div className="col-md-11">
							<p>Huan Ge：品牌是关于理解我们的客户和他们的文化，创造一种表达自己价值观的视觉语言，也可以与观众交谈。
					我们的大多数客户专注于不同领域，具有独特的目标和价值观。
					令人兴奋的是，我们有不同的客户，因为我们学习不同的学科和文化。
					此外，品牌不能是时尚。这不是杂志封面或插图，只能看到几天，然后抛出。
					一个品牌经常要生活十年或更长时间，所以我们必须创造一些相关而有趣的东西，在几年内看起来不会那么长久。</p>
						</div>
					</div>	
				</div>
			</div>
		)
	}

	showAnswer(){
		let isShow = !this.state.show;
		this.setState({ show: isShow });
	}

	componentDidMount() {
		console.log();
	}
}