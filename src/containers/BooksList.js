import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions/index';

const BooksList = ({ books, changeFilter, filter }) => {
  const handleFilterChange = filter => {
    if (filter === 'All') {
      changeFilter('');
    } else {
      changeFilter(filter);
    }
  };
  return (
    <>
      <CategoryFilter clickHandle={handleFilterChange} />
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
            <Book book={book} key={book.id} />
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
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatch = {
  changeFilter,
};

export default connect(mapStateToProps, mapDispatch)(BooksList);
