import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import {
  Box, Text, FormControl, Input, Flex, Select,
} from '@chakra-ui/react';
import { sendDataApi } from '../reducers/index';
// import { createBook } from '../actions/index';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');
  const [author, setAuthor] = useState('');

  const handleChange = e => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else if (e.target.id === 'category') {
      setCategory(e.target.value);
    } else {
      setAuthor(e.target.value);
    }
  };

  const handleSubmit = () => {
    window.location.reload();
    if (title.match(/\w/i) && (author.match(/\w/i))) {
      sendDataApi({ title, author, category });
    }
    setTitle('');
    setCategory('Action');
    setAuthor('');
  };

  return (
    <Box m="37px 100px 0" pt="29px" borderTop="1px solid #e8e8e8">
      <Text fontFamily="montserratBold" fontWeight="bold" fontSize="20px" color="#888888" mb="19px  ">ADD NEW BOOK</Text>
      <FormControl>
        <Flex>
          <Input type="text" name="title" id="title" onChange={handleChange} value={title} placeholder="Book title" bg="white" />
          <Input type="text" name="title" id="author" onChange={handleChange} value={author} placeholder="Author" bg="white" mx="1em" />
          <Select id="category" value={category} onChange={handleChange} bg="white" mx="1em">
            {categories.map(cat => (
              <option value={cat} key={cat}>{cat}</option>
            ))}
          </Select>
          <Input type="submit" value="ADD BOOK" onClick={handleSubmit} color="#fff" bg="#0290ff" fontFamily="robotoSlabBold" fontWeight="bold" />
        </Flex>
      </FormControl>
    </Box>
  );
};

// BooksForm.propTypes = {
//   createBook: PropTypes.func.isRequired,
// };

// const mapDispatch = {
//   createBook,
// };

export default BooksForm;
