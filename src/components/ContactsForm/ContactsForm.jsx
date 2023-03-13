import { useState } from 'react';

import PropTypes from 'prop-types';

import toast from 'react-hot-toast';
import { useAddContactMutation, useGetAllContactsQuery } from 'redux/contacts/contactsSlice';
import { Spinner } from 'components/Spinner/Spinner';

import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function ContactsForm({ handleCloseModal }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useGetAllContactsQuery();

  const [addContact, { isLoading }] = useAddContactMutation();

  // const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const data = {
      name: name,
      number: number,
    };

    if (contacts.some(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      return alert(`${data.name} is already in contacts`);
    }

    try {
      await addContact(data);
      toast.success('Контакт добавлен');
      handleCloseModal();
    } catch (error) {
      toast.error('Ошибка при добавлении контакта');
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            // id={nameInputId}
            onChange={handleChange}
            type="name"
            name="name"
            label="Name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            type="tel"
            name="number"
            label="Phone number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            {isLoading && <Spinner />}
            Add contact
          </Button>
        </Box>
      </Box>
    </>
  );
}

ContactsForm.propTypes = {};
