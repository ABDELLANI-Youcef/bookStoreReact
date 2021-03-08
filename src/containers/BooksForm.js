import React, { useState } from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = e => {
    // console.log(e.targe)
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BooksForm;
