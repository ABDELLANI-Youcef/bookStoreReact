import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const BooksList = books => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    {books.map(book => (
      <Book book={book} key={book.id} />
    ))}
  </table>
);

const mapStateToProps = state => ({
  books: state,
});

export default connect(mapStateToProps)(BooksList);
