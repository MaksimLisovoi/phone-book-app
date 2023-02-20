import { createSlice, nanoid } from '@reduxjs/toolkit';
// { id: '1', name: 'Alex', number: '12313123' }
const contactsInitialState = [
  { id: '0', name: 'Spam', number: '123213' },
  { id: '1', name: 'Bran', number: '123213' },
];

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: { myContacts: contactsInitialState },
  // Об'єкт редюсерів
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.myContacts.push(payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.myContacts.findIndex(contact => contact.id === action.payload);
      state.myContacts.splice(index, 1);
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
