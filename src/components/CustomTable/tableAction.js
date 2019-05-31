import { TABLE_APLLY, TABLE_FILTER } from '../../utils/constans';

export const enterGame = id => ({
  type: TABLE_APLLY,
  payload: id,
});

export const filterGames = id => ({
  type: TABLE_FILTER,
  payload: id,
});
