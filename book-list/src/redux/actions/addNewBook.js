import { ADD_NEW_BOOK } from './types';

const addNewBook = (title) => ({
  type: ADD_NEW_BOOK,
  payload: title,
});

export default addNewBook;
