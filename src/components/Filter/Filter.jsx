import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/contacts.selectors';
import { searchContact } from '../../redux/contacts/filter.slise';
import { Heading } from 'components/Heading/Hading';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => dispatch(searchContact(event.target.value));

  return (
    <>
      <Heading title={'Search contacts'} />
      <div>
        <label htmlFor="search">
          Find contact by name
          <input
            type="text"
            name="search"
            value={filter}
            onChange={handleChange}
            placeholder="Please start typing name..."
          />
        </label>
      </div>
    </>
  );
};
