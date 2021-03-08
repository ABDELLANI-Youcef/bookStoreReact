import React from 'react';
import { connect } from 'react-redux';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = () => (
  <select id="filter">
    {categories.map(cat => (
      <option value={cat} key={cat}>{cat}</option>
    ))}
  </select>
);

export default CategoryFilter;
