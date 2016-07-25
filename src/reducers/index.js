import { combineReducers } from 'redux';

import authenticationReducer from './authentication';
import postsReducer from './posts';

const rootReducer = combineReducers({
	authenticated: authenticationReducer,
	posts: postsReducer
});

export default rootReducer;
