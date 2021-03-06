import React from 'react';
import { connect } from 'react-redux';

const BooksList = books => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    {books.map(book => (
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
      </tr>
    ))}
  </table>
);

const mapStateToProps = state => ({
  books: state,
});

export default connect(mapStateToProps)(BooksList);
