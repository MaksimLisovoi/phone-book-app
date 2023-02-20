import { useState, useEffect } from 'react';
import { FormBox, Label, Input, Btn } from './Form.styled';
import { nanoid } from 'nanoid';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);

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

  // useEffect(() => {
  //   window.localStorage.setItem('name', JSON.stringify(name));
  // }, [name]);

  // useEffect(() => {
  //   window.localStorage.setItem('number', JSON.stringify(number));
  // }, [number]);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      name: name,
      number: number,
    };

    // if (contacts.some(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
    //   return alert(`${data.name} is already in contacts`);
    // }

    dispatch(addContact(data));

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
      <Btn type="submit">Add contact</Btn>
    </FormBox>
  );
}

Form.propTypes = {};
