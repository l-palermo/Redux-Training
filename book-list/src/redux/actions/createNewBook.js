import { CREATE_NEW_BOOK } from './types';

export const createNewBook = (data) => {
  return {
    type: CREATE_NEW_BOOK,
    payload: data
  }
}