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

import { useForm, Controller, useFormState } from 'react-hook-form';
import { nameValidation, numberValidation } from './validation';

export function ContactsForm({ handleCloseModal }) {
  const { data: contacts } = useGetAllContactsQuery();

  const [addContact, { isLoading }] = useAddContactMutation();

  // const contacts = useSelector(selectContacts);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
  });
  const { errors } = useFormState({ control });

  const myHandleSubmit = async data => {
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
        <Box component="form" onSubmit={handleSubmit(myHandleSubmit)} sx={{ mt: 1 }}>
          <Typography fontSize={24} align="center">
            Add contact
          </Typography>
          <Controller
            rules={nameValidation}
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                margin="normal"
                fullWidth
                required
                onChange={e => field.onChange(e)}
                type="name"
                name="name"
                label="Name"
                value={field.value}
                helperText={errors.name?.message}
                error={!!errors.name?.message}
              />
            )}
          />
          <Controller
            rules={numberValidation}
            control={control}
            name="number"
            render={({ field }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={e => field.onChange(e)}
                type="tel"
                name="number"
                label="Phone number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={field.value}
                helperText={errors.number?.message}
                error={!!errors.number?.message}
              />
            )}
          />
          {/* <TextField
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
          /> */}
          {/* <TextField
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
          /> */}

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
