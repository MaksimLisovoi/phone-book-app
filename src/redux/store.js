import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterSlice';

import { contactsApi } from './contactsSlice';

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(contactsApi.middleware),
});
