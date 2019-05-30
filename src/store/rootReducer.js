import { combineReducers } from 'redux';
import ModalLoginReducer from '../components/ModalLogin/ModalLoginReducer';

const rootReducer = combineReducers({
  modalLogin: ModalLoginReducer,
});

export default rootReducer;
