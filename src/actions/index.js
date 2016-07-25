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
		payload: [
			{id: 1, title: 'hey, hey, hey!', body: 'hello man, I am Alex, responsible for this project'},
			{id: 2, title: 'i would like to travel', body: 'so much time before i was at sea and I missing by this time'}
		]
	}
}
