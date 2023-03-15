import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import { fetchingInProgress, fetchingSuccess, fetchingError } from './contactsSlice';

// axios.defaults.baseURL = 'https://63f367e2fe3b595e2ee12a2a.mockapi.io';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (data, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
