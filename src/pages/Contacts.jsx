import { Box } from 'components/Box';
import { Form } from 'components/Form';
import { Heading } from '../components/App/App.styled';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';

export const Contacts = () => {
  return (
    <Box mx="auto" maxWidth={450} p={'5'}>
      <Box border="normal" borderRadius={'normal'} p={5} mb={4}>
        <Heading>Phonebook</Heading>
        <Form />
      </Box>
      <Box border="normal" borderRadius={'normal'} p={5}>
        <Heading>Contacts</Heading>
        <Filter />
        <ContactsList />
      </Box>
    </Box>
  );
};
