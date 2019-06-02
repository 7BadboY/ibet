import {
  TOOGLE,
  TOOGLE_LOGIN,
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
} from '../../utils/constants';

const INITIALSTATE = {
  showModal: false,
  activeSignUp: true, // При открытии модалки показывает логин или регистрацию
  isSignUpSuccess: false,
  isSignInSuccess: false,
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
    default:
      return state;
  }
};

export default ModalLoginReducer;
