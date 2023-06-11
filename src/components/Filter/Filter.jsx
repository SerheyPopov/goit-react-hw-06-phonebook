import { useDispatch } from 'react-redux';

import { filterContact } from '../../redux/FilterSlice';
import { Label, Input, Container, SubTitle } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handlChange = evt => {
    dispatch(filterContact(evt.target.value));
  };
  
  return (
    <Container>
      <SubTitle>Find contacts by name</SubTitle>
      <Label onChange={handlChange}>
        <Input type="text" name="filter" />
      </Label>
    </Container>
  );
};
