import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchBooks from '../../redux/actions/fetchBooks';
import joinBooks from '../../redux/actions/joinBooks';

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
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.body}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books.items,
  newBook: state.books.item,
});
const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
  joinBooks: () => dispatch(joinBooks()),
});

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

export default connect(mapStateToProps, mapDispatchToProps)(List);
