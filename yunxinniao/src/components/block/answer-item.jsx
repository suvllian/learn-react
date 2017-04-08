import React, {Component} from 'react';

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
				<div className="panel-head">
					<div className="row">
						<div className="col-md-1-2">
							<p>0{ this.props.value+1 }.</p>
						</div>
						<div className="col-md-11-2" onClick={ this.showAnswer.bind(this) }>
							<div className="col-md-4">
								<p className="panel-info">
									{ this.props.title }
								</p>
							</div>
							<div className="add-icon">

							</div>
						</div>
					</div>		
				</div>
				<div className="panel-body" style={{height: this.state.show ? '7em' : '0px'}}>
					<div className="row">
						<div className="col-md-11-2">
							<p>
								{ this.props.text }
							</p>
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
		
	}
}