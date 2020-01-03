import { connect } from 'react-redux';
import addNewBook from '../../redux/actions/addNewBook';
import postNewBook from '../../redux/actions/postNewBook';
import InputBox from '../../components/inputBox/InputBox';

const mapStateToProps = (state) => ({
  newBook: state.newBook.book,
});
const mapDispatchToProps = (dispatch) => ({
  addNewBook: (title) => dispatch(addNewBook(title)),
  postNewBook: () => dispatch(postNewBook()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBox);
