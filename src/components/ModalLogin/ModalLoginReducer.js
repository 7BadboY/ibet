import {
  TOOGLE,
  TOOGLE_LOGIN,
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  CLEAR_NOTIFICATION,
} from '../../utils/constants';

const INITIALSTATE = {
  showModal: false,
  activeSignUp: true, // При открытии модалки показывает логин или регистрацию
  isSignUpSuccess: false,
  isSignInSuccess: false,
  serverResponse: {},
};

const ModalLoginReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case TOOGLE:
      return {
        ...state,
        showModal: !state.showModal,
      };
    case TOOGLE_LOGIN:
      return {
        ...state,
        activeSignUp: !state.activeSignUp,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSignUpSuccess: !state.isSignUpSuccess,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isSignInSuccess: !state.isSignInSuccess,
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        serverResponse: { type: `error`, message: `error` },
      };
    case CLEAR_NOTIFICATION:
      return {
        ...state,
        serverResponse: {},
      };
    default:
      return state;
  }
};

export default ModalLoginReducer;
