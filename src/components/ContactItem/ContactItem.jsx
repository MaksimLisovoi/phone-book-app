import { ContactListItem, Btn, Text } from './ContactItem.styled';

import { useDeleteContactMutation, useToggleFavoriteMutation } from 'redux/contacts/contactsSlice';

import { Spinner } from 'components/Spinner/Spinner';
import toast from 'react-hot-toast';

export const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [toggleFavorite, result] = useToggleFavoriteMutation();

  const handleDelete = async contactId => {
    try {
      await deleteContact(contactId);
      toast.success('Контакт удалён');
    } catch (error) {
      toast.error('Ошибка при удалении контакта');
    }
  };

  //   const toggleIsFavorite = async () => {
  //     try {
  //       await toggleFavorite({ contactId: id, isFavorite: true });
  //     } catch (error) {}
  //   };

  return (
    <ContactListItem>
      <Text>
        {name}: {number}
      </Text>
      {/* <Btn onClick={toggleIsFavorite}>Favorite</Btn> */}
      <Btn disabled={isLoading} onClick={() => handleDelete(id)}>
        {isLoading && <Spinner />}
        Delete
      </Btn>
    </ContactListItem>
  );
};
