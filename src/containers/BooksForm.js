import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Box, Text, FormControl, Input, Flex, Select,
} from '@chakra-ui/react';
import { createBook } from '../actions/index';

const BooksForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleChange = e => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title.match(/\w/i)) {
      createBook({ id: Math.floor(Math.random() * 1000), title, category });
    }
    setTitle('');
    setCategory('Action');
  };

  return (
    <Box m="37px 100px 0" pt="29px" borderTop="1px solid #e8e8e8">
      <Text fontFamily="montserratBold" fontWeight="bold" fontSize="20px" color="#888888" mb="19px  ">ADD NEW BOOK</Text>
      <FormControl>
        <Flex>
          <Input type="text" name="title" id="title" onChange={handleChange} value={title} placeholder="Book title" bg="white" />
          <Select id="category" value={category} onChange={handleChange} bg="white" mx="34px" w="285px">
            {categories.map(cat => (
              <option value={cat} key={cat}>{cat}</option>
            ))}
          </Select>

          <Input type="submit" value="ADD BOOK" onClick={handleSubmit} color="#fff" bg="#0290ff" w="184px" fontFamily="robotoSlabBold" fontWeight="bold" />
        </Flex>
      </FormControl>
    </Box>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatch = {
  createBook,
};

export default connect(null, mapDispatch)(BooksForm);
