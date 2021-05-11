import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';

import style from './ContactList.module.css';

const ContactList = ({ contacts, filter, onDelete }) => {
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const contactElement = filterContacts.map(({ name, number, id }) => (
    <li key={id} className={style.contactListItem}>
      {name}: {number}
      <span onClick={() => onDelete(name)} className={style.closeButton}></span>
    </li>
  ));

  return <ul className={style.contactList}>{contactElement}</ul>;
};

ContactList.defaultProps = {
  contacts: [],
  onDelete: () => {},
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: state.phonebooks.contacts,
  filter: state.phonebooks.filter,
});

const mapDispatchToProps = dispatch => ({
  onDelete: name => dispatch(deleteContact(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
