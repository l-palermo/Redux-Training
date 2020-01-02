import { ADD_NEW_BOOK } from '../actions/types';

const initialState = {
  book: '',
}

export const newBookReducer = (state = initialState, action) => {
  console.log('Z')
  switch(action.type) {
    case ADD_NEW_BOOK:
      console.log('Y')
      return {
        ...state,
        book: action.payload
      }
      default:
        return state;
  }
}
