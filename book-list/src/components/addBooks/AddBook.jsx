import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addNewBook from '../../redux/actions/addNewBook';
import postNewBook from '../../redux/actions/postNewBook';

const AddBook = ({ newBook, addNewBook, postNewBook }) => {
  const dosomething = () => {
    postNewBook();
    addNewBook('');
  };
  return (
    <div>
      <input
        type="text"
        placeholder="insert new book"
        value={newBook}
        onChange={(e) => addNewBook(e.target.value)}
      />
      <button type="button" onClick={() => dosomething()}>Add Book</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  newBook: state.newBook.book,
});
const mapDispatchToProps = (dispatch) => ({
  addNewBook: (title) => dispatch(addNewBook(title)),
  postNewBook: () => dispatch(postNewBook()),
});

AddBook.propTypes = {
  newBook: PropTypes.string.isRequired,
  addNewBook: PropTypes.func.isRequired,
  postNewBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
