import { FETCH_POSTS } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_POSTS:
			console.log(action.payload);
					return [...state, ...action.payload.data]
	}

	return state;
}
