import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63f367e2fe3b595e2ee12a2a.mockapi.io' }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: data => ({
        url: '/contacts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    toggleFavorite: builder.mutation({
      query: payload => {
        console.log(payload);
        const { contactId, isFavorite } = payload;
        return { url: `/contacts/${contactId}`, method: 'PATCH', body: isFavorite };
      },
      invalidatesTags: ['Contact'],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useToggleFavoriteMutation,
} = contactsApi;

// import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// export const contactsSlice = createSlice({
//   // Ім'я слайсу
//   name: 'contacts',
//   // Початковий стан редюсера слайсу
//   initialState: {
//     myContacts: [],
//     isLoading: false,
//     error: null,
//   },
//   // Об'єкт редюсерів
//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [addContact.pending]: handlePending,
//     [deleteContact.pending]: handlePending,
//     [fetchContacts.rejected]: handleRejected,
//     [addContact.rejected]: handleRejected,
//     [deleteContact.rejected]: handleRejected,

//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.myContacts = action.payload;
//     },

//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.myContacts.push(action.payload);
//     },

//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;

//       const index = state.myContacts.findIndex(contact => contact.id === action.payload.id);

//       state.myContacts.splice(index, 1);
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
