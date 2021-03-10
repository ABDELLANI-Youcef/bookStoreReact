import React from 'react';
import { Box } from '@chakra-ui/react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <Box w="100vw" bg="#f5f6fa" p="4em">
    <Box boxShadow="2xl" borderRadius="4px" pb="10em">
      <BooksList />
      <BooksForm />
    </Box>
  </Box>
);

export default App;
