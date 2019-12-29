import { FETCH_BOOKS } from './types';

export const fetchBooks = (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => dispatch({
      type: FETCH_BOOKS,
      payload: json
    })
  )
};
