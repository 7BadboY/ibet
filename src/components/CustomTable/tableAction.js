import { TABLE_SEARCH, TABLE_FILTER } from '../../utils/constans';

export const searchUser = name => ({
  type: TABLE_SEARCH,
  payload: name,
});

export const filterGames = id => ({
  type: TABLE_FILTER,
  payload: id,
});
