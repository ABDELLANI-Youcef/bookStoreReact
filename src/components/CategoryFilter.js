import React from 'react';
import PropTypes from 'prop-types';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ clickHandle, filter }) => {
  const changeHandle = e => {
    clickHandle(e.target.value);
  };
  return (
    <select id="filter" value={filter} onChange={changeHandle}>
      {categories.map(cat => (
        <option value={cat} key={cat}>{cat}</option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  clickHandle: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default CategoryFilter;
