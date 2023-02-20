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

  const checkRequest = isLoading && !error;

  // const storeFilter = useSelector(getFilter);

  // const getVisibleContacts = () => {
  //   const normalizedFilter = storeFilter.toLowerCase();

  //   console.log(myContacts);

  //   return (
  //     myContacts.length > 0 &&
  //     JSON.stringify(myContacts, null, 2).filter(contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter),
  //     )
  //   );
  // };
  // const contacts = getVisibleContacts();

  return (
    // <h1>Hi</h1>
    <>
      {checkRequest && <b>Request in progress...</b>}
      <ul>
        {myContacts.length > 0 &&
          myContacts.map(({ name, number, id }) => (
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
