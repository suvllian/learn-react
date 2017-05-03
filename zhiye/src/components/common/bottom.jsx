import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Bottom extends Component{
	render() {
		return (
			<footer className="footer">
				<div className="copyright">
					<p>Copyright@2017. All rights reserverd</p>
				</div>
				<div className="footer-link">
					<Link to="/about" className="link-after-rule">关于我们</Link>
					<Link to="/about" className="link-after-rule">联系我们</Link>
					<Link to="">FAQ</Link>
				</div>
			</footer>
		)
	}
}
