import axios from 'axios';

import {
	CHANGE_AUTH,
	FETCH_POSTS
} from './types';

export function authenticate(isLoggedIn) {
	return {
		type: CHANGE_AUTH,
		payload: isLoggedIn
	}
}

export function fetchPosts() {
	return {
		type: FETCH_POSTS,
		payload: axios.get('https://jsonplaceholder.typicode.com/posts')
	}
}
