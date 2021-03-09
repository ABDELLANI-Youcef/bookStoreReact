import React from 'react';
import { Box } from '@chakra-ui/react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <Box w="100vw%" h="100vh" bg="#f5f6fa" p="4em">
    <Box bg="#fff" boxShadow="2xl" borderRadius="4px">
      <BooksList />
      <BooksForm />
    </Box>
  </Box>
);

export default App;
