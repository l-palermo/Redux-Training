import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../redux/actions/fetchBooks';

const List = ({books, fetchBooks}) => {
  console.log(3)
  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])
  
  return (
    <div>
      {console.log(4)}
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

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks())
})

export default connect(mapStateToProps, mapDispatchToProps)(List);