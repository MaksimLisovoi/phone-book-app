import { ContactItem, Btn, Text } from './Contacts.styled';

import PropTypes, { object } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter, getIsLoading, getError } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const myContacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  const checkRequest = isLoading && !error;

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return (
      myContacts.length > 0 &&
      myContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    );
  };
  const filteredContacts = getVisibleContacts();

  return (
    // <h1>Hi</h1>
    <>
      {checkRequest && <b>Request in progress...</b>}
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <ContactItem key={name}>
            <Text>
              {name}: {number}
            </Text>
            <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
          </ContactItem>
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(object),
};
