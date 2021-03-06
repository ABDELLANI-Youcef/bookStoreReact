import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import booksReducer from './reducers/books';
import { createStore } from "redux";

const defaultBooks = [
  {
    id: Math.floor(Math.random() * 1000),
    title: 'The war through the history',
    category: 'History',

  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Harry Potter',
    category: 'Action',

  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'life of Bill Gates',
    category: 'Biography',

  },
];

const store = createStore(booksReducer(defaultBooks));

ReactDOM.render(
  <Provider store={store}>
    <App />

  </Provider>,
  document.getElementById('root'),
);
