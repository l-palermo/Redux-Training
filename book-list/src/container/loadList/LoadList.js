import { connect } from 'react-redux';
import List from '../../components/list/List';
import fetchBooks from '../../redux/actions/fetchBooks';
import joinBooks from '../../redux/actions/joinBooks';

const mapStateToProps = (state) => ({
  books: state.books.items,
  newBook: state.books.item,
});
const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
  joinBooks: () => dispatch(joinBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
