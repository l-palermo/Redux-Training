import { JOIN_ITEMS } from './types';

const join = (books, book) => {
  console.log(26);
  books.unshift(book);
  console.log(27);
  return books;
};

const joinBooks = () => {
  console.log(24);
  return {
    type: JOIN_ITEMS,
    payload: join,
  };
};

export default joinBooks;
