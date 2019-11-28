import { 
        LOAD_BEGIN,
        SET_USERS_SUCCESS,
        ADD_USER_SUCCESS,
        ADD_USERS_SUCCESS,
        LOAD_FAILURE 
      } from './users.actionTypes';
import { API_URL } from '../../constants/constants';
import axios from 'axios';

const loadBegin = () => ({
	type: LOAD_BEGIN
});

const setUsersSuccess = (users) => ({
	type: SET_USERS_SUCCESS,
	payload: users
});

const addUsersSuccess = (users) => ({
  type: ADD_USERS_SUCCESS,
  payload: users
});

const addUserSuccess = (user) => ({
  type: ADD_USER_SUCCESS
});

const loadFailure = (error) =>({
	type: LOAD_FAILURE,
	payload: error
});

export const setUsers = (count=3) => {
	return dispatch => {
  	dispatch(loadBegin());
  	return fetch(`${API_URL}/users?page=1&count=${count}`, {
      	method: 'GET'
    })
    .then(res => res.json())
    .then(users => {
      dispatch(setUsersSuccess(users.users));
    })
    .catch(error => {
    	dispatch(loadFailure(error))
    })
  };
};

export const addUsers = (counter, count) => {
  return dispatch => {
    dispatch(loadBegin());
    return fetch(`${API_URL}/users?page=${counter}&count=${count}`, {
          method: 'GET'
      })
      .then(res => res.json())
      .then(users => {
        dispatch(addUsersSuccess(users.users));
      })
      .catch(error => {
        dispatch(loadFailure(error));
      });
  };
};

export const addUser = (user, count) => {
  const formData = new FormData();
  formData.append('photo', user.photo)
  formData.append('name', user.name)
  formData.append('email', user.email)
  formData.append('phone', user.phone)
  formData.append('position_id', user.position_id)

  
  return dispatch => {
    dispatch(loadBegin());
    axios.get(`${API_URL}/token`)
    .then( response => {
      const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'Token': response.data.token
        }
      }
      axios.post(`${API_URL}/users`, formData, config)
      .then(res => dispatch(addUserSuccess()))
      .then(x=>axios.get(`${API_URL}/users?page=1&count=${count}`)
        .then(res => dispatch(setUsersSuccess(res.data.users)))
      )
      .catch(error => {
        dispatch(loadFailure(error))
      });
    })
    .catch(error => {
        dispatch(loadFailure(error))
    });
  };
};