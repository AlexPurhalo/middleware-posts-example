import React, { Component } from 'react';


export default class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<a>Home</a>
					</li>
					<li className="nav-item">
						<a>Resources</a>
					</li>
					<li className="nav-item">
						<button>Sign In</button>
					</li>
				</ul>
			</nav>
		);
	}
}
