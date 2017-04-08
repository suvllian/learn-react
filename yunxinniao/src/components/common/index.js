import React, {Component} from 'react';
import Nav from './nav.jsx';

export default class App extends Component{
	render() {
		return (
			<div>
				<Nav />
				{this.props.children}
			</div>
		)
	}
}