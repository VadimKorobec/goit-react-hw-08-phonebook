import { useSelector, useDispatch } from 'react-redux';
import { selectFilterValue } from 'redux/contacts/selectors';
import { Container, Input, Label, LabelText } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => dispatch(selectFilterValue(event.target.value));

  return (
    <>
      <Container>
        <Label>
          <LabelText> Find contact by name</LabelText>
          <Input type="text" value={filter} onChange={handleChange} />
        </Label>
      </Container>
    </>
  );
};
