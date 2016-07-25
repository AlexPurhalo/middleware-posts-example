import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostsList extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<ul className="list-group">
				<h4>All Posts</h4>
				{
					this.props.posts.map(post => {
						return (
							<li className="list-group-item" key={post.id}>
								<h5>{post.title}</h5>
								<p>{post.body}</p>
							</li>
						);
					})
				}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts }
}

export default connect(mapStateToProps, actions)(PostsList);
