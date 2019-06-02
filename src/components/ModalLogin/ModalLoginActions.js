import {
  TOOGLE,
  TOOGLE_LOGIN,
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
} from '../../utils/constants';

export const toogleModalLogin = () => {
  return {
    type: TOOGLE,
  };
};

export const toogleLogin = () => {
  return {
    type: TOOGLE_LOGIN,
  };
};

export const signUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};

export const signInSuccess = () => {
  return {
    type: SIGNIN_SUCCESS,
  };
};

export const asyncSignin = userData => dispatch => {
  fetch('http://localhost:8080/api/auth/signin', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'content-type': 'application/json' },
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      dispatch(signInSuccess());
      console.log(`data.token to localStorage`, data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const asyncSignup = userData => dispatch => {
  return fetch('http://localhost:8080/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'content-type': 'application/json' },
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      dispatch(signUpSuccess());
      dispatch(asyncSignin(userData));
      dispatch(toogleModalLogin());
      console.log(data);
      return data;
    })
    .catch(err => {
      console.log(err);
    });
};
