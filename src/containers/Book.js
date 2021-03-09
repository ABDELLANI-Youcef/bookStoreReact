import PropTypes from 'prop-types';
import {
  Box, Text, Button, Flex, Grid,
} from '@chakra-ui/react';

const Book = ({ book, clickHandler }) => {
  const removeBook = () => {
    clickHandler(book);
  };
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} border="solid 1px #e8e8e8" bg="#fff" m="37px 100px 0" p="32px 147px 26px 27px" borderRadius="4px" key={book.id}>
      <Box>
        <Text fontFamily="montserratBold" opacity="0.5" fontWeight="bold" fontSize="14px">{book.category}</Text>
        <Text fontFamily="robotoSlabBold" fontSize="22px">{book.title}</Text>
        <Text>Author Name</Text>
        <Flex>
          <Text>Comments</Text>
          <Button onClick={removeBook} type="button">Remove</Button>
          <Text>Edit</Text>
        </Flex>
      </Box>
      <Box>
        <Box>
          O
        </Box>
        <Box>
          <Text>100%</Text>
          <Text>Completed</Text>
        </Box>
      </Box>
      <Box>
        <Text>CURRENT CHAPTER</Text>
        <Text>Chapter XX</Text>
        <Button>Update Progress</Button>
      </Box>
    </Grid>
  );
};
Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
