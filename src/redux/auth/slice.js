import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './auth.operations';

const successfulActions = [register, logIn];
const getActionsSuccess = type => successfulActions.map(action => action[type]);

const extraActionsUser = [register, logIn, logOut];
const getActionsUser = type => extraActionsUser.map(action => action[type]);

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoadingAuth: false,
  errorAuth: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.errorAuth = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.errorAuth = action.payload;
      })
      .addMatcher(
        isAnyOf(...getActionsSuccess('fulfilled')),
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(isAnyOf(...getActionsUser('pending')), (state, _) => {
        state.isLoadingAuth = true;
      })
      .addMatcher(isAnyOf(...getActionsUser('fulfilled')), (state, _) => {
        state.isLoadingAuth = false;
        state.errorAuth = null;
      })
      .addMatcher(isAnyOf(...getActionsUser('rejected')), (state, action) => {
        state.isLoadingAuth = false;
        state.errorAuth = action.payload;
      }),
});

export const authReduser = authSlice.reducer;
