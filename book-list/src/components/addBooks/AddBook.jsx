import React from 'react';
import { connect } from 'react-redux';
import { addNewBook } from '../../redux/actions/addNewBook';
import { postNewBook } from '../../redux/actions/postNewBook';

const AddBook = ({newBook, addNewBook, postNewBook}) => {
  const dosomething = () => {
    postNewBook();
  };
  return (
    <div>
      <input type='text' 
        placeholder='insert new book' 
        value={newBook} 
        onChange={(e) => addNewBook(e.target.value)}
      />
      <button onClick={() => dosomething()}>Add Book</button>
    </div>
  );
};

const mapStateToProps = state => ({
  newBook: state.newBook.book
});
const mapDispatchToProps = dispatch => ({
  addNewBook: (title) => dispatch(addNewBook(title)),
  postNewBook: () => dispatch(postNewBook())
});
export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
