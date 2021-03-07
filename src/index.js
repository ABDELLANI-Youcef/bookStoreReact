import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import booksReducer from './reducers/books';

const store = createStore(booksReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />

  </Provider>,
  document.getElementById('root'),
);
