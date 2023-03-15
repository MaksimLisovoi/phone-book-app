import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);

    token.set(data.token);
    console.log(data);
    toast.success(`User ${data.user.name} has successfully registered`);
    return data;
  } catch (e) {
    toast.error(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);

    return data;
  } catch (e) {
    toast.error(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  console.log(persistedToken);

  if (!token) return;

  console.log('Refreshing user!');

  token.set(persistedToken);
  try {
    const { data } = await axios.get('users/current');
    console.log(data);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const operations = { register, logIn, logOut, refreshUser };

export default operations;
