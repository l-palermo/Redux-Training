import { FETCH_BOOKS } from './types';
import { store } from '../redux/store';

export const fetchBooks = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      console.log(12)
      store.dispatch({
      type: FETCH_BOOKS,
      payload: json
    })
  })
};
