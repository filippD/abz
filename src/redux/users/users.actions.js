import { SET_USERS_BEGIN, SET_USERS_SUCCESS, SET_USERS_FAILURE } from './users.actionTypes';

const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const setUsersBegin = () => ({
	type: SET_USERS_BEGIN
});

const setUsersSuccess = (users) => ({
	type: SET_USERS_SUCCESS,
	payload: users
});

const setUsersFailure = (error) =>({
	type: SET_USERS_FAILURE,
	payload: error
});

export const setUsers = (counter, count=3) => {
	return dispatch => {
    	dispatch(setUsersBegin());
    	return fetch(`${API_URL}/users?page=${counter}&count=${count}`, {
	      	method: 'GET',
	    })
      	.then(res => res.json())
      	.then(users => {
        	dispatch(setUsersSuccess(users.users));
      	})
      	.catch(error => {
      		dispatch(setUsersFailure(error))
      	});
  	};
};