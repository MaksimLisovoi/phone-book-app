import PropTypes, { object } from 'prop-types';

import { useGetAllContactsQuery } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem';

export const ContactsList = () => {
  const { data: contacts, isLoading, error } = useGetAllContactsQuery();

  const filterValue = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();

    if (contacts && contacts.length > 0) {
      return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
  };
  const filteredContacts = getVisibleContacts();
  const checkRequest = isLoading && !error;

  return (
    <>
      {checkRequest ? (
        <b>Request in progress...</b>
      ) : (
        <ul>
          {filteredContacts &&
            filteredContacts.map(contact => <ContactItem key={contact.id} {...contact} />)}
        </ul>
      )}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(object),
};
