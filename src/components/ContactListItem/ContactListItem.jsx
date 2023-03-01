import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <p>
        {contact.name} : {contact.phone}
      </p>
      <button type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
