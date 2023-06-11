import { ContactForm } from './Form/Form';
import { ContactList } from './Contacts/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};
