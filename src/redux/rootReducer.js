import { combineReducers } from 'redux';

import usersReducer from './users/users.reducer';
import currentUserReducer from './currentUser/currentUser.reducer';

const rootReducer = combineReducers({
	users: usersReducer,
	currentUser: currentUserReducer
});

export default rootReducer;