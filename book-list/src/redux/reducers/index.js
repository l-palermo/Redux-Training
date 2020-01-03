import { combineReducers } from 'redux';
import fetchBookReducer from './fetchBookReducer';
import newBookReducer from './newBookReducer';

export default combineReducers({
  books: fetchBookReducer,
  newBook: newBookReducer,
});
