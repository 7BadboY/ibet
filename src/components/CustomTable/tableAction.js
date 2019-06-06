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

export const handleOnApply = (beatId, beatData, token) => {
  fetch(`http://localhost:8080/api/bets/apply/${beatId}`, {
    method: 'POST',
    body: JSON.stringify(beatData),
    headers: {
      'content-type': 'application/json',
      Authorization: token,
    },
  })
    .then(response => {
      response.json().then(data => {
        console.log(data);
      });
    })
    .catch(err => {
      console.log(err);
    });
};
