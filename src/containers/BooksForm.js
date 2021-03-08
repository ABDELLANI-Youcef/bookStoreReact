import React, { useState } from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = () => {

  };

  return (
    <form>
      <label htmlFor="title">
        Title:
        <input type="text" name="title" id="title" />
      </label>
      <label htmlFor="category">
        Category:
        <select id="category">
          {categories.map(cat => (
            <option value={cat} key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BooksForm;
