import { combineReducers } from 'redux';

const betsReducer = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  bets: betsReducer,
});

export default rootReducer;
