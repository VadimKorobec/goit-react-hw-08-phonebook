import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectErrorContacts,
  selectIsLoadingContacts,
} from 'redux/contacts/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { Container, List, Text } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(selectIsLoadingContacts);
  const errorContacts = useSelector(selectErrorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoadingContacts && !errorContacts && <b>Request in progress...</b>}
      {contacts.length ? (
        <List>
          {contacts.map(contact => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
        </List>
      ) : (
        <Text>Start adding contacts!</Text>
      )}
    </Container>
  );
};
