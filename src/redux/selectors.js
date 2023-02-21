import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.myContacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

// export const selectVisibleContacts = state => {
//   const contacts = selectContacts(state);
//   const filterValue = selectFilter(state);

//   const normalizedFilter = filterValue.toLowerCase();

//   console.log('Я запустился');

//   if (contacts.length > 0) {
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
//   }
// };

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();

    console.log('Я запустился');

    if (contacts.length > 0) {
      return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
  },
);
