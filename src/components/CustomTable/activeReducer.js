import { TABLE_SEARCH, TABLE_FILTER } from '../../utils/constans';

const initialTodos = [
  {
    id: 'asdqweqherherher',
    userID: '1',
    userName: 'Bro',
    points: 100,
    type: 'random',
    betValue: '10',
    exitDate: new Date().getTime() + 60000,
    creatingDate: new Date().getTime(),
    isActive: true,
  },
  {
    id: 'asas3dkjalsdkjr',
    userID: '1',
    userName: 'Carnage',
    points: 200,
    type: 'random',
    betValue: '1',
    exitDate: new Date().getTime() + 60000,
    creatingDate: new Date().getTime(),
    isActive: false,
  },
  {
    id: 'asas3dkjalsdkjr',
    userID: '1',
    userName: 'Adolf',
    points: 200,
    type: 'random',
    betValue: '1',
    exitDate: new Date().getTime() + 60000,
    creatingDate: new Date().getTime(),
    isActive: true,
  },
  {
    id: 'asas3dkjalsdkjr',
    userID: '1',
    userName: 'Gregory',
    points: 200,
    type: 'random',
    betValue: '1',
    exitDate: new Date().getTime() + 60000,
    creatingDate: new Date().getTime(),
    isActive: true,
  },
];

const activeReducer = (state = initialTodos, { type, payload }) => {
  switch (type) {
    case TABLE_SEARCH:
      return state.filter(el => el.userName === payload);
    default:
      return state;
  }
};

export default activeReducer;
