import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filter';
import { Form, Input, Label, LabelText } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Form>
      <Label>
        <LabelText>Search Contacts</LabelText>
        <Input
          type="text"
          name="search"
          value={filter}
          onChange={handleChange}
          placeholder="Search..."
        />
      </Label>
    </Form>
  );
};
