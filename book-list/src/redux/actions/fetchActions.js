import { FETCH_BOOKS_PENDING, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR } from './types';

export const fetchBooksPending = () => {
  console.log(6)
  return {
    type: FETCH_BOOKS_PENDING,
  }
};

export const fetchBooksSuccess = (data) => {
  console.log(8)
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: data
  }
};

export const fetchBooksError = (error) => {
  return {
    type: FETCH_BOOKS_ERROR,
    error: error
  }
}