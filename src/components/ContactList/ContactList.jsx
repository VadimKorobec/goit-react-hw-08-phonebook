import { ContactsListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { List } from './ContactList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <List>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactsListItem contact={contact} />
          </li>
        ))}
      </List>
    </>
  );
};
