import { BET_FETCH_SUCCESS, BET_APLLY } from '../../utils/constans';

const initialTodos = {
  loading: false,
  items: [],
  error: null,
};

const activeReducer = (state = initialTodos, { type, payload }) => {
  switch (type) {
    case BET_FETCH_SUCCESS:
      return { ...state, items: payload };
    case BET_APLLY: {
      const newItems = state.items.map(el => {
        if (el.id === payload) {
          return {
            ...el,
            isActive: !el.isActive,
          };
        }
        return el;
      });
      return { ...state, items: newItems };
    }
    default:
      return state;
  }
};

export default activeReducer;
