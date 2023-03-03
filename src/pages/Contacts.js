import { ContactList } from 'components/ContactList/ContactList';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Contacts</h1>
      <ContactsForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </div>
  );
};

export default Contacts;
