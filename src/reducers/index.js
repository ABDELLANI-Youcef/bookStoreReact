import { createBook } from '../actions/index';

const URL = 'https://tranquil-caverns-54399.herokuapp.com/books';

export const booksAlready = async store => {
  let booksData;
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        mode: 'cors',
      },
    };
    const response = await fetch(URL, options);
    booksData = await response.json();
    booksData.forEach(book => {
      store.dispatch(createBook(book));
    });
  } catch (error) {
    return error;
  }
  return booksData;
};

const defaultBooks = [];

export const sendDataApi = async book => {
  try {
    const response = await fetch(URL, {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const removeDataApi = async book => {
  await fetch(`${URL}/${book.id}`, {
    mode: 'cors',
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const result = 'book deleted';
  window.location.reload();
  return result;
};

export default defaultBooks;
