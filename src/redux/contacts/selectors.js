import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoadingContacts = state =>
  state.contacts.isLoadingContacts;

export const selectErrorContacts = state => state.contacts.errorContacts;

export const selectFilter = state => state.filters.search;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],

  (search, contacts) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    )
);
