import { createBook } from '../actions/index';

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
    const response = await fetch('https://tranquil-caverns-54399.herokuapp.com/books', options);
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

export default defaultBooks;
