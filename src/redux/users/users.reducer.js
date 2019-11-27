import { SET_USERS_BEGIN, SET_USERS_SUCCESS, SET_USERS_FAILURE } from './users.actionTypes';

const INITIAL_STATE = {
	loading: false,
	users: [],
	error: null,
	counter: 1
};

const usersReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SET_USERS_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			};
		case SET_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: [...state.users, ...action.payload],
				counter: state.counter+1
			};
		case SET_USERS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	};
};

export default usersReducer;