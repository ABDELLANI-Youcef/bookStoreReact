import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import booksReducer from './reducers/books';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  booksReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />

  </Provider>,
  document.getElementById('root'),
);
