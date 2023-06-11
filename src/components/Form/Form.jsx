import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import { getContacts } from '../../redux/Selectors';
import { addContact } from '../../redux/AddContactSlice';
import { Form, Label, Input, Span, Button, Title } from './Form.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const stateContacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    const allertMassage = stateContacts.filter(
      contact => contact.name.toLowerCase() === form.name.value.toLowerCase()
    );

    if (allertMassage.length !== 0) {
      return (
        toast.error(form.name.value + ' is already in contacts'), form.reset()
      );
    }
    dispatch(addContact(form.name.value, form.number.value));
    form.reset();
  };

  return (
    <div>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Span>Name</Span>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <Span>Number</Span>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
      <Toaster toastOptions={{ duration: 1500 }} />
    </div>
  );
};
