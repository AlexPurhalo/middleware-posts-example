import React, { Component } from 'react';
import { Link } from 'react-router'


export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = { authenticated: true };
	}

	signOut() {
		this.setState({ authenticated: true});
	}

	signIn() {
		this.setState({ authenticated: false});
	}

	authButton() {
		if (!this.state.authenticated) {
			return <button onClick={this.signOut.bind(this)}>Sign In</button>
		} else {
			return <button onClick={this.signIn.bind(this)}>Sign Out</button>
		}
	}
	render() {
		return (
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/posts">Posts</Link>
					</li>
					<li className="nav-item">
						{this.authButton()}
					</li>
				</ul>
			</nav>
		);
	}
}

