import {
  BET_APLLY,
  BET_FETCH_SUCCESS,
  BET_FETCH_FAILURE,
} from '../../utils/constans';

export const enterGame = id => ({
  type: BET_APLLY,
  payload: id,
});

const fetchSuccess = data => ({
  type: BET_FETCH_SUCCESS,
  payload: data,
});

const fetchFailure = error => ({
  type: BET_FETCH_FAILURE,
  payload: error,
});

export const asyncGetBets = () => dispatch => {
  fetch('http://localhost:8080/api/bets')
    .then(r => r.json())
    .then(data => {
      console.log('data', data);
      dispatch(fetchSuccess(data.bets));
    })
    .catch(err => dispatch(fetchFailure(err)));
};
