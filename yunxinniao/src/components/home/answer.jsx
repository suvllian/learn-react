import React, {Component} from 'react';
import {Link} from 'react-router';
import './../../style/answer.scss';
import AnswerItem from './../block/answer-item.jsx';

export default class Answer extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="answer">
				<div className="container">
					<h1 className="section-title">Answers</h1>
					{
						[1,2,3,4,5].map((item, index) => 
							<AnswerItem key={index}  value={index}/>
						)
					}
				</div>
			</div>
		)
	}
}