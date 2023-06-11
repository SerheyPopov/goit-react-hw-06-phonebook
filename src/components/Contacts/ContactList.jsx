import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { deleteContact } from '../../redux/AddContactSlice';
import { getContacts, getFilter } from '../../redux/Selectors';
import {
  List,
  Item,
  Button,
  Name,
  Number,
  SubContainer,
  SubTitle,
} from './Contact.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contact = useSelector(getContacts);
  const contactFilter = useSelector(getFilter);

  const visiblesContact = contact
    .filter(contact =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    )
    .sort((firstName, secondName) =>
      firstName.name.localeCompare(secondName.name)
    );

  return (
    <div>
      <SubTitle>Contacts</SubTitle>
      <List>
        {visiblesContact.map(({ name, number, id }) => (
          <Item key={id}>
            <Name>{name}</Name>
            <SubContainer>
              <Number>{number}</Number>
              <Button onClick={() => dispatch(deleteContact(id))}>╳</Button>
            </SubContainer>
          </Item>
        ))}
      </List>
    </div>
  );
};
