import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { searchContact } from '../../redux/contacts/filter';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => dispatch(searchContact(event.target.value));

  return (
    <>
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
