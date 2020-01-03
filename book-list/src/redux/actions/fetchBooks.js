import fetch from 'cross-fetch';
import { fetchBooksPending, fetchBooksSuccess, fetchBooksError } from './fetchActions';

const fetchBooks = () => (dispatch) => {
  console.log(5);
  dispatch(fetchBooksPending());
  console.log(7);
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(
      (promise) => promise.json(),
      (error) => dispatch(fetchBooksError(error)),
    ).then((data) => dispatch(fetchBooksSuccess(data)));
};

export default fetchBooks;
