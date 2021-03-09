import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter, removeBook } from '../actions/index';

const BooksList = ({
  books, changeFilter, filter, removeBook,
}) => {
  const handleFilterChange = filter => {
    if (filter === 'All') {
      changeFilter('');
    } else {
      changeFilter(filter);
    }
  };

  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <>
      <CategoryFilter clickHandle={handleFilterChange} filter={filter} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.filter(book => book.category === filter || filter === '').map(book => (
            <Book book={book} clickHandler={handleRemoveBook} key={book.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};
BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatch = {
  removeBook, changeFilter,
};

export default connect(mapStateToProps, mapDispatch)(BooksList);
