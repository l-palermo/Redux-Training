import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Book from '../book/Book';

const List = ({
  books, newBook, fetchBooks, joinBooks,
}) => {
  console.log(3);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  useEffect(() => {
    if (newBook.title) {
      console.log(23);
      joinBooks();
    }
  }, [newBook.title, joinBooks]);

  return (
    <div>
      {console.log(4)}
      <h2> Books: </h2>
      { books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          body={book.body}
        />
      ))}
    </div>
  );
};

List.propTypes = {
  books: PropTypes.arrayOf(Object).isRequired,
  newBook: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  fetchBooks: PropTypes.func.isRequired,
  joinBooks: PropTypes.func.isRequired,
};

export default List;
