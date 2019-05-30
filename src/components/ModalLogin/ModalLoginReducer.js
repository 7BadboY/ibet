const INITIALSTATE = {
  showModal: false,
};

const ModalLoginReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case 'TOOGLE':
      return {
        ...state,
        showModal: !state.showModal,
      };
    default:
      return state;
  }
};

export default ModalLoginReducer;
