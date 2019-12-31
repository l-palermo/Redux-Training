import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_PENDING, FETCH_BOOKS_ERROR } from '../actions/types';

const initialState = {
  pending: false,
  items: [],
  error: null
}

export default (state = initialState, action) => {
  console.log('A')
  switch (action.type) {
    case FETCH_BOOKS_PENDING:
      console.log('B')
      return {
        ...state,
        pending: true
      }
    case FETCH_BOOKS_SUCCESS: 
    console.log('C')
      return {
        ...state,
        pending: false,
        items: action.payload
      }
      case FETCH_BOOKS_ERROR:
        return {
          ...state,
          pending: false,
          error: action.error
        }
    default:
      return state;
  }
}