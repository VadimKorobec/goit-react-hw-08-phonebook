import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { contactsReducer } from './contacts/contacts.slice';
import { filtersReducer } from './contacts/filter.slise';
import { authReduser } from './auth/auth.slice';

const authPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'], // Persisting token field from auth slice to localstorage
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReduser),
    contacts: contactsReducer,
    filters: filtersReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
