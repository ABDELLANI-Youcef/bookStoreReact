import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Box, Text, Flex, Spacer,
} from '@chakra-ui/react';
import { FaUserAlt } from 'react-icons/fa';
import Book from './Book';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter, removeBook } from '../actions/index';

const BooksList = ({
  books, changeFilter, filter, removeBook,
}) => {
  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  const handleRemoveBook = book => {
    removeBook(book);
  };
  const renderBooks = filter.length > 1 ? books : books.filter(book => book.category === filter[0]);
  return (
    <Box bg="#f5f6fa">
      <Flex bg="#fff" p="23px 99px 27px 100px" alignItems="center">
        <Flex alignItems="center">
          <Text color="#0290ff" fontSize="30px" fontWeight="bold" fontFamily="montserratBold">Bookstore CMS</Text>
          <Text fontSize="13px" color="#121212" m="0px 41px 0px 47px" fontFamily="montserratRegular">BOOKS</Text>
          <CategoryFilter clickHandle={handleFilterChange} filter={filter} />
        </Flex>
        <Spacer />
        <Box borderRadius="50%" border="1px" borderColor="gray.200" w="45px" h="45px" p="0.8em">
          <FaUserAlt color="#0290ff" />
        </Box>
      </Flex>
      <Box>
        <Box>
          {renderBooks.map(book => (
            <Book book={book} clickHandler={handleRemoveBook} key={book.id} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
BooksList.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilter: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatch = {
  removeBook, changeFilter,
};

export default connect(mapStateToProps, mapDispatch)(BooksList);
