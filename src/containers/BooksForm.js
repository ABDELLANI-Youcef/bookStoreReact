import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const BooksForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleChange = e => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = () => {
    createBook({ id: Math.floor(Math.random() * 1000), title, category });
    setTitle('');
    setCategory('Action');
  };

  return (
    <form>
      <label htmlFor="title">
        Title:
        <input type="text" name="title" id="title" onChange={handleChange} value={title} />
      </label>
      <label htmlFor="category">
        Category:
        <select id="category" value={category} onChange={handleChange}>
          {categories.map(cat => (
            <option value={cat} key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatch = {
  createBook,
};

export default connect(null, mapDispatch)(BooksForm);
