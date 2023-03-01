import axios from 'axios';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsReguest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};
