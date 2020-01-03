import React from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ newBook, addNewBook, postNewBook }) => (
  <div>
    <input
      type="text"
      placeholder="insert new book"
      value={newBook}
      onChange={(e) => addNewBook(e.target.value)}
    />
    <button
      type="button"
      onClick={() => {
        postNewBook();
        addNewBook('');
      }}
    >
Add Book
    </button>
  </div>
);

InputBox.propTypes = {
  newBook: PropTypes.string.isRequired,
  addNewBook: PropTypes.func.isRequired,
  postNewBook: PropTypes.func.isRequired,
};

export default InputBox;
