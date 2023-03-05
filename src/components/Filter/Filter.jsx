import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { searchContact } from '../../redux/contacts/filter';
import { Container, Input, Label, LabelText } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => dispatch(searchContact(event.target.value));

  return (
    <>
      <Container>
        <Label htmlFor="search">
          <LabelText> Find contact by name</LabelText>
          <Input
            type="text"
            name="search"
            value={filter}
            onChange={handleChange}
            placeholder="Please start typing name..."
          />
        </Label>
      </Container>
    </>
  );
};
