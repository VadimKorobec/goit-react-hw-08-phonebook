import { ContactList } from '../components/ContactList/ContactList';
import { Helmet } from 'react-helmet';
import { Filter } from '../components/Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'components/Container/Container.styled';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';

export default function Contacts() {
  return (
    <div>
      <Helmet prioritizeSeoTags>
        <title>My phonebook</title>
        <meta property="og:title" content="My phonebook" />
      </Helmet>
      <Container>
        <ContactsForm />
        <Filter />
        <ContactList />
        <ToastContainer position="top-center" theme="colored" />
      </Container>
    </div>
  );
}
