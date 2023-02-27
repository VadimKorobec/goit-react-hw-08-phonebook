import { createSlice } from '@reduxjs/toolkit';

const initialSlice = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export default authSlice.reducer;
