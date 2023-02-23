import { ContactListItem, Btn, Text, BtnText } from './ContactItem.styled';

import { useDeleteContactMutation } from 'redux/contactsSlice';
import { RotatingLines } from 'react-loader-spinner';
import { Spinner } from 'components/Spinner/Spinner';
import toast, { Toaster } from 'react-hot-toast';

export const ContactItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDelete = async contactId => {
    try {
      await deleteContact(contactId);
      toast.success('Контакт удалён');
    } catch (error) {
      toast.error('Ошибка при удалении контакта');
    }
  };

  return (
    <ContactListItem>
      <Text>
        {contact.name}: {contact.number}
      </Text>
      <Btn disabled={isLoading} onClick={() => handleDelete(contact.id)}>
        {isLoading && <Spinner />}
        Delete
      </Btn>
    </ContactListItem>
  );
};
