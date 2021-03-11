import PropTypes from 'prop-types';
import {
  Box, Text, Button, Flex, Grid,
} from '@chakra-ui/react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Book = ({ book, clickHandler }) => {
  const removeBook = () => {
    clickHandler(book);
  };
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} border="solid 1px #e8e8e8" bg="#fff" m="37px 100px 0" p="32px 147px 26px 27px" borderRadius="4px" key={book.id}>
      <Box>
        <Text fontFamily="montserratBold" opacity="0.5" fontWeight="bold" fontSize="14px">{book.category}</Text>
        <Text fontFamily="robotoSlabBold" fontSize="22px">{book.title}</Text>
        <Text fontFamily="robotoSlabRegular" color="#4386bf" fontSize="14px">{book.author}</Text>
        <Flex fontSize="14px">
          <Button fontFamily="robotoSlabRegular" fontWeight="300" color="#4386bf" p="1em 1em 1em 0" variant="link">Comments</Button>
          <Button fontFamily="robotoSlabRegular" fontWeight="300" color="#4386bf" borderRight="1px solid" borderLeft="1px solid" borderColor="#e8e8e8" borderRadius="0" m="0.7em 0" p="0 1em" variant="link" onClick={removeBook} type="button">Remove</Button>
          <Button fontFamily="robotoSlabRegular" fontWeight="300" color="#4386bf" p="1em" variant="link">Edit</Button>
        </Flex>
      </Box>
      <Flex>
        <Box>
          <AiOutlineLoading3Quarters color="#0290ff" fontSize="6em" />
        </Box>
        <Box m="0.8em">
          <Text fontSize="32px" fontFamily="montserratRegular">100%</Text>
          <Text opacity="0.5" fontFamily="montserratRegular">Completed</Text>
        </Box>
      </Flex>
      <Box borderLeft="1px solid" borderColor="#e8e8e8" pl="60px">
        <Text fontFamily="robotoSlabRegular" opacity="0.5">CURRENT CHAPTER</Text>
        <Text fontFamily="robotoSlabLight" fontWeight="300">Chapter 5</Text>
        <Button mt="34px" fontFamily="robotoSlabLight" fontWeight="300" color="#fff" bg="#0290ff">Update Progress</Button>
      </Box>
    </Grid>
  );
};
Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
