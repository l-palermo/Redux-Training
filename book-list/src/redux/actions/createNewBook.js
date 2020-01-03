import { CREATE_NEW_BOOK } from './types';

const createNewBook = (data) => ({
  type: CREATE_NEW_BOOK,
  payload: data,
});

export default createNewBook;
