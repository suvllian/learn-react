import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Nav extends Component{
	render() {
		return (
			<footer className="footer">
				<div className="copyright">
					<p>Copyright@2017. All rights reserverd</p>
				</div>
				<div className="footer-link">
					<a href="#" className="link-after-rule">关于我们</a>
					<a href="#" className="link-after-rule">联系我们</a>
					<a href="#">FAQ</a>
				</div>
			</footer>
		)
	}
}
