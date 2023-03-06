import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { Button, Form, Input, Label, LabelText } from './ContactsForm.styled';
import { addContact } from 'redux/contacts/operations';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChance = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert('Contact already exists');
      return;
    }
    const contact = {
      name: name,
      number: number,
    };

    dispatch(addContact(contact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <LabelText>Name</LabelText>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChance}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <LabelText>Number</LabelText>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChance}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};
