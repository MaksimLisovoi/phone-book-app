import { Box } from '../Box';
import { Form } from 'components/Form';
import { Heading } from './App.styled';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';

export function App() {
  return (
    <Box mx="auto" maxWidth={450} p={'5'}>
      <Box border="normal" borderRadius={'normal'} p={5} mb={4}>
        <Heading>Phonebook</Heading>
        <Form />
      </Box>
      <Box border="normal" borderRadius={'normal'} p={5}>
        <Heading>Contacts</Heading>
        <Filter />
        <Contacts />
      </Box>
    </Box>
  );
}
