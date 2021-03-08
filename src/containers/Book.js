import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr key={book.id}>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button type="button">Delete the Book</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.string.isRequired,
};

export default Book;
