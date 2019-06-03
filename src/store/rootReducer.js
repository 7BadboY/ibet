import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import ModalLoginReducer from '../components/ModalLogin/ModalLoginReducer';
import sessionReducer from '../components/ModalLogin/sessionReducer';

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  modalLogin: ModalLoginReducer,
  session: persistReducer(sessionPersistConfig, sessionReducer),
});

export default rootReducer;
