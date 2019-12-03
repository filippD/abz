import { 
	SET_CURRENT_USER_START,
	SET_CURRENT_USER_SUCCESS,
	SET_CURRENT_USER_FAILURE
} from './currentUser.actionTypes';
import { API_URL } from '../../constants/constants';

const setCurrentUserStart = () => ({
	type: SET_CURRENT_USER_START
});

const setCurrentUserSuccess = (user) => ({
	type: SET_CURRENT_USER_SUCCESS,
	payload: user
});

const setCurrentUserFailure = (error) => ({
	type: SET_CURRENT_USER_FAILURE
});

export const setCurrentUser = () => {
	return dispatch => {
  	dispatch(setCurrentUserStart());
  	return fetch(`${API_URL}/users`, {
      	method: 'GET'
    })
    .then(res => res.json())
    .then(users => {
      dispatch(setCurrentUserSuccess(users.users[0]));
    })
    .catch(error => {
    	dispatch(setCurrentUserFailure(error))
    })
  };
};
