import PropTypes, { object } from 'prop-types';

import { useGetAllContactsQuery } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem';
import { Typography } from '@mui/material';
import { Filter } from 'components/Filter';

export const ContactsList = () => {
  const { data: contacts, isLoading, error } = useGetAllContactsQuery();

  const filterValue = useSelector(selectFilter);

  const checkContacts = contacts && contacts.length > 0;

  const getVisibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();

    if (checkContacts) {
      return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
  };
  const filteredContacts = getVisibleContacts();
  const checkRequest = isLoading && !error;

  return (
    <>
      <Filter checkContacts={checkContacts} />
      {checkRequest ? (
        <b>Request in progress...</b>
      ) : (
        <ul>
          {filteredContacts ? (
            filteredContacts.map(contact => <ContactItem key={contact.id} {...contact} />)
          ) : (
            <Typography fontWeight={500}>There are no contacts in your Phonebook!</Typography>
          )}
        </ul>
      )}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(object),
};
