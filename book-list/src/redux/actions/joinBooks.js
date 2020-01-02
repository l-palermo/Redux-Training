import { JOIN_ITEMS } from './types';

const join = (books, book) => {
  console.log(26)
  books.unshift(book)
  console.log(27)
  console.log(books)
  return books
}

export const joinBooks = () => {
  console.log(24)
  return {
    type: JOIN_ITEMS,
    payload: join
  }
}