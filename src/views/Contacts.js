import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  });

  return (
    <div>
      <h1>Contacts</h1>
      <ContactsForm />
    </div>
  );
};

export default Contacts;
