import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';

export const Contactlist = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}></li>
        ))}
      </ul>
    </div>
  );
};
