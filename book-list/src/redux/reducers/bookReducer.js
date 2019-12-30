import { FETCH_BOOKS } from '../action/types';

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS: 
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}