import React, {Component} from 'react';
import { Link } from 'react-router';
import api from './../../api/';
import Item from './tr.jsx';

export default class Download extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			works: [],
			currentPage: 1,
		}

		this.deleteItem = this.deleteItem.bind(this);
	}

	render() {
		return (
			<div className="container">
				<section>
					<table>
						<thead>
							<tr>
								<th>序号</th>
								<th>图片</th>
								<th><Link to="/add">添加</Link></th>
							</tr>
						</thead>
						<tbody>
							{
								this.state.works.map((item, index) => 
									<Item key={index}  {...item} index={index} 
										deleteItem={this.deleteItem} />
								)
							}
						</tbody>
					</table>

					<div className="container-bottom">
						<span className="blue-Btn" onClick={ this.getData.bind(this, 1)}>首页</span>
						<span className="blue-Btn" onClick={ this.getData.bind(this, this.state.currentPage - 1)}>上一页</span>
						<span className="blue-Btn" onClick={ this.getData.bind(this, this.state.currentPage + 1)}>下一页</span>
					</div>
				</section>
			</div>
		)
	}

	deleteItem(index) {
		let works = this.state.works;
		works.splice(index, 1);
		this.setState({ works: works});
	}

	getData(page) {
		if (page == 0) {
			return ;
		}

		api.getImageList(page).then(response => {
			this.setState({ works: response.data});
			this.setState({ currentPage: page});
			if (response.data.length == 0) {
				this.getData(this.state.currentPage-1);
			}
		}).catch(error => {
			console.log(error);
		})
	}

	componentDidMount() {
		this.getData(1);
	}
}