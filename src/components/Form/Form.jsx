import { useState } from 'react';
import { FormBox, Label, Input, Btn } from './Form.styled';
import { nanoid } from 'nanoid';

import PropTypes from 'prop-types';

import toast, { Toaster } from 'react-hot-toast';
import { useAddContactMutation, useGetAllContactsQuery } from 'redux/contactsSlice';
import { Spinner } from 'components/Spinner/Spinner';

export function Form() {
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
    } catch (error) {
      toast.error('Ошибка при добавлении контакта');
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <FormBox onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          id={nameInputId}
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number
        <Input
          id={numberInputId}
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Btn type="submit">{isLoading && <Spinner />} Add contact</Btn>
      <Toaster />
    </FormBox>
  );
}

Form.propTypes = {};
