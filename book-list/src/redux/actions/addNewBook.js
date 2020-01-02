import { ADD_NEW_BOOK } from './types';

export const addNewBook = (title) => {
  return {
    type: ADD_NEW_BOOK,
    payload: title
  }
}
