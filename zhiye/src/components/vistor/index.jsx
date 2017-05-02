import React, {Component} from 'react';
import { Link } from 'react-router';

import Aside from './aside.jsx';
import Main from './main.jsx';

export default class Visitor extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<div className="row visitor">
				<Aside />
				<Main />
			</div>
		)
	}
}