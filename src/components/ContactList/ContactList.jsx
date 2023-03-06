import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <List>
        {contacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </List>
    </>
  );
};
