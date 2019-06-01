import { TOOGLE, TOOGLE_LOGIN } from '../../utils/constants';

const INITIALSTATE = {
  showModal: false,
  activeSignUp: false,
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

    default:
      return state;
  }
};

export default ModalLoginReducer;
