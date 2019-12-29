import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../action/booksActions';

const List = ({books, fetchBooks}) => {
  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])
  
  return (
    <div>
      <h2> Books: </h2>
      { books.map(book => {
        return <div key={book.id}> 
        <h3>{book.title}</h3>
        <p>{book.body}</p>
        </div>
      })}
    </div>
  );
}
 
const mapStateToProps = state => ({
  books: state.books.items
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => fetchBooks(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(List);