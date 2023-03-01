export const ContactListItem = ({ contact }) => {
  return (
    <div>
      <p>
        {contact.name} : {contact.phone}
      </p>
      <button type="button">Delete</button>
    </div>
  );
};
