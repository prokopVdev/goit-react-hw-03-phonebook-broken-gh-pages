import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  submitHandler = data => {
    const normalizedName = data.name.toLowerCase();
    if (
      this.state.contacts.some(
        ({ name }) => name.toLowerCase() === normalizedName
      )
    ) {
      alert(`${data.name} is already in the contacts`);
      return;
    }
    this.setState(prev => {
      return {
        ...prev,
        contacts: [...prev.contacts, { id: nanoid(), ...data }],
      };
    });
  };

  onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  onDeleteClick = id => {
    this.setState(prevState => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { submitHandler, onFilterChange, onDeleteClick } = this;
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <Form addContact={submitHandler} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={onFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteClick={onDeleteClick}
        />
      </div>
    );
  }
}

export default App;
