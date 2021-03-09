import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { ChakraProvider } from '@chakra-ui/react';
import App from './components/App';
import booksReducer from './reducers/books';
import filterReducer from './reducers/filter';
import './styles/index.css';

const rootReducer = combineReducers({ books: booksReducer, filter: filterReducer });
const store = createStore(rootReducer);
ReactDOM.render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById('root'),
);
