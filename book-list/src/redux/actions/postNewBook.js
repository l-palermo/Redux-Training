import fetch from 'cross-fetch';
import { createNewBook } from './createNewBook';

export const postNewBook = () => (dispatch, getState) => {
  const state = getState();
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credetials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    redirect: 'follow',
    reffererPolicy: 'no-refferer',
    body: JSON.stringify({
      title: state.newBook.book,
      body: 'ooooooo',
      userId: 1
    })
  }).then(response => response.json())
  .then(data => dispatch(createNewBook(data)))
};
