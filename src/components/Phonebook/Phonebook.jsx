import React from 'react';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';

import style from './Phonebook.module.css';

const Phonebook = () => {
  return (
    <>
      <div className={style.phonebook}>
        <h1 className={style.title}>Phonebook</h1>
        <Form />
        <h2 className={style.contactsTitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default Phonebook;

// --------------------------------------------------------------------------------

// class Phonebook extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contactsList = JSON.parse(localStorage.getItem('contacts'));
//     this.setState({
//       contacts: contactsList || [],
//     });
//   }

//   componentDidUpdate() {
//     const { contacts } = this.state;
//     const contactsList = JSON.stringify(contacts);
//     localStorage.setItem('contacts', contactsList);
//   }

//   addContact = (name, number) => {
//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     const { contacts } = this.state;

//     const result = contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase(),
//     );
//     if (result) {
//       alert(`${name} is already in contacts`);
//     } else {
//       const newContacts = [...contacts];
//       newContacts.push(newContact);

//       this.setState({ contacts: newContacts });
//     }
//   };

//   onDelete = name => {
//     this.setState(prevState => {
//       const { contacts } = prevState;
//       const newContacts = [...contacts];
//       const foundIdx = newContacts.map(item => item.name).indexOf(name);
//       if (foundIdx > -1) newContacts.splice(foundIdx, 1);
//       return {
//         contacts: newContacts,
//       };
//     });
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   render() {
//     const { contacts, filter } = this.state;

//     return (
//       <>
//         <div className={style.phonebook}>
//           <h1 className={style.title}>Phonebook</h1>
//           <Form onSubmit={this.addContact} />
//           <h2 className={style.contactsTitle}>Contacts</h2>
//           <Filter filter={filter} changeFilter={this.changeFilter} />
//           <ContactList
//             contacts={contacts}
//             filter={filter}
//             onDelete={this.onDelete}
//           />
//         </div>
//       </>
//     );
//   }
// }

// export default Phonebook;
