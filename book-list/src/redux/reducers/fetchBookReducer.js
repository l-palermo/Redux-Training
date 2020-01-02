import { FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_PENDING,
  FETCH_BOOKS_ERROR,
CREATE_NEW_BOOK,
JOIN_ITEMS } from '../actions/types';

const initialState = {
  pending: false,
  items: [],
  error: null,
  item: {},
}

export const fetchBookReducer = (state = initialState, action) => {
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
      case CREATE_NEW_BOOK:
        return {
          ...state,
          item: action.payload
        }
      case JOIN_ITEMS:
        console.log(25)
        return {
          ...state,
          items: [state.item, ...state.items]
        }
    default:
      return state;
  }
}