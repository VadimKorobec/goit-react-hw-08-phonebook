import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectErrorContacts,
  selectIsLoadingContacts,
} from 'redux/contacts/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(selectIsLoadingContacts);
  const errorContacts = useSelector(selectErrorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoadingContacts && !errorContacts && <b>Request in progress...</b>}
      {contacts.length ? (
        <ul>
          {contacts.map(contact => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>Start adding contacts!</p>
      )}
    </>
  );
};
