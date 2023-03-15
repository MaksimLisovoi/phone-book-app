import { ContactListItem } from './ContactItem.styled';

import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import LoadingButton from '@mui/lab/LoadingButton';
import { Spinner } from 'components/Spinner/Spinner';
import toast from 'react-hot-toast';
import Typography from '@mui/material/Typography';

export const ContactItem = ({ name, number, id }) => {
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
      <Typography>
        {name}: {number}
      </Typography>

      <LoadingButton
        onClick={() => handleDelete(id)}
        loading={isLoading}
        // loadingIndicator="Loading…"
        variant="outlined"
        size="small"
      >
        Delete
      </LoadingButton>
    </ContactListItem>
  );
};
