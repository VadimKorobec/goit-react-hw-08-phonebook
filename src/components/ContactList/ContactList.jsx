import { ContactsListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { Item, List, Progres } from './ContactList.styled';

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
      {isLoading && !error && <Progres>Request in progress...</Progres>}
      <List>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <ContactsListItem contact={contact} />
          </Item>
        ))}
      </List>
    </>
  );
};
