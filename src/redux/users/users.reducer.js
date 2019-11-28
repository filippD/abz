import { LOAD_BEGIN, SET_USERS_SUCCESS, ADD_USER_SUCCESS, ADD_USERS_SUCCESS, LOAD_FAILURE } from './users.actionTypes';

const INITIAL_STATE = {
	loading: false,
	users: [],
	error: null,
	counter: 1
};

const usersReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case LOAD_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			};
		case SET_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: [...action.payload],
			};
		case ADD_USER_SUCCESS:
			return {
				...state,
				loading: false
			}
		case LOAD_FAILURE:
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