import React, { Component } from 'react';

class PostsList extends Component {
	constructor(props) {
		super(props);

		this.state = {posts: [{id: 1, content: 'hello world'}, {id: 2, content: 'fuck yeah'}, {id: 3, content: 'last third'}]};
	}

	render() {
		return (
			<div>
				<h4>All Posts</h4>
				{
					this.state.posts.map(post => { return <p key={post.id}>{post.content}</p>})
				}
			</div>
		);
	}
}

export default PostsList;
