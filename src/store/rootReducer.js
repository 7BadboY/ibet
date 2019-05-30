import { combineReducers } from 'redux';
import activeReducer from '../components/CustomTable/activeReducer';

const betsReducer = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  bets: betsReducer,
  active: activeReducer,
});

export default rootReducer;
