import React, {Component} from 'react';
import Nav from './nav.jsx';
import Footer from './bottom.jsx';

export default class App extends Component{
	render() {
		return (
			<div>
			    <Nav />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}