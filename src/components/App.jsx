import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Contacts from './Contacts';
import Container from './Container';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    const { value, name } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  addContact = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { name: name, number: number, id: nanoid() }],
      name: '',
      number: '',
    }));
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <>
        <Container title="Phonebook">
          <Form
            name={name}
            number={number}
            addContact={this.addContact}
            onChange={this.handleChange}
          />
        </Container>
        <Container title="Contacts">
          <Contacts contacts={contacts} />
        </Container>
      </>
    );
  }
}

/* <form onSubmit={this.addContact}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form> */

// <ul>
//   {contacts.map(({ name, id }) => (
//     <li key={id}>{name}</li>
//   ))}
// </ul>
