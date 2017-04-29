import React, {Component} from 'react';
import { Link, hashHistory} from 'react-router';
import api from './../../api/';

export default class trItem extends Component{
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<tr>
				<td>{ this.props.index + 1 }</td>
				<td>
					<img src={ "/static/img/" + this.props.big.src } />
				</td>
				<td>
					<span className="change-left"><Link to={"/change/" + this.props.big.id}>修改</Link></span>
					<span className="delete-right" onClick={ this.deleteTrItem.bind(this, this.props.big.id) } >删除</span>
				</td>
			</tr>
		)
	}

	deleteTrItem(id) {
		if (confirm("确认删除")) {
			api.deleteItem(id).then(response => {
				if (response.data == 1) {
					this.props.deleteItem(this.props.index);
				}
			});	
		}
	}
}