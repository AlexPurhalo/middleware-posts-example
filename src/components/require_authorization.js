import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
	class Authentication extends Component {
		// Access to using 'router' property
		static contextTypes = {
			router: React.PropTypes.object
		};

		// Redirect to root path if user are not authenticated
		componentWillMount() {
			if (!this.props.authenticated) {
				this.context.router.push('/');
			}
		}

		// Redirect to root page if user signed out
		componentWillUpdate(nextProps) {
			if (!nextProps.authenticated) {
				this.context.router.push('/');
			}
		}

		render() {
			console.log(this.context)
			// console.log(ComposedComponent);
			// console.log(this.props.authenticated);
			return <ComposedComponent {...this.props} />
		}
	}

	function mapStateToProps(state) {
		return { authenticated: state.authenticated };
	}

	return connect(mapStateToProps)(Authentication);
}

