import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button, Item, ItemText } from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Item key={id}>
        <ItemText>{name}</ItemText>
        <ItemText>{number}</ItemText>
        <Button type="button" onClick={handleDelete}>
          Delete
        </Button>
      </Item>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
