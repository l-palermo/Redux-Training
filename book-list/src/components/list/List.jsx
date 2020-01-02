import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../redux/actions/fetchBooks';
import { joinBooks } from '../../redux/actions/joinBooks';

const List = ({books, book, fetchBooks, joinBooks}) => {
  console.log(3)
  console.log(book)
  console.log(22)

  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  useEffect(() => {
    if (book.id) {
      console.log(23)
      joinBooks()
    }
  }, [book.id])

  return (
    <div>
      {console.log(4)}
      {console.log(books)}
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
  books: state.books.items,
  book: state.books.item
});
const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
  joinBooks: () => dispatch(joinBooks())
});
export default connect(mapStateToProps, mapDispatchToProps)(List);
