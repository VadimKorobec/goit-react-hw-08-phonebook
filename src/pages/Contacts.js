import { Filter } from '../components/Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactList/ContactList';

export default function Contacts() {
  return (
    <div>
      <title>My phonebook</title>
      <meta property="og:title" content="My phonebook" />

      <div>
        <ContactsForm />
        <Filter />
        <ContactsList />
        <ToastContainer position="top-center" theme="colored" />
      </div>
    </div>
  );
}
