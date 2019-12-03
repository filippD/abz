import { 
	SET_CURRENT_USER_START,
	SET_CURRENT_USER_SUCCESS,
	SET_CURRENT_USER_FAILURE
} from './currentUser.actionTypes';

const INITIAL_STATE = {
	currentUser: null,
	loading: false,
	error: null
};

const currentUserReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SET_CURRENT_USER_START:
			return {
				...state,
				loading: true,
				error: null
			};
		case SET_CURRENT_USER_SUCCESS:
			return {
				...state,
				loading: false,
				currentUser: action.payload
			};
		case SET_CURRENT_USER_FAILURE:
			return {
				...state,
				loading: false,
				currentUser: action.payload
			};
		default:
			return state;
	};
};

export default currentUserReducer;