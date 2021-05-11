import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import style from './Form.module.css';

class Form extends Component {
  state = { name: '', number: '' };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  //============================================  handleChange
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  //============================================  handleSubmitForm
  handleSubmitForm = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onSubmit } = this.props;
    onSubmit(name, number);
    this.reset();
  };

  //============================================  reset
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  //============================================  render
  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmitForm}>
        <label className={style.label} htmlFor={this.nameInputId}>
          Name
          <br />
          <input
            className={style.formInput}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="enter name"
            onChange={this.handleChange}
            id={this.nameInputId}
            required
          />
        </label>
        <br />
        <label className={style.label} htmlFor={this.numberInputId}>
          Number
          <br />
          <input
            className={style.formInput}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="enter number"
            onChange={this.handleChange}
            id={this.numberInputId}
            required
          />
        </label>
        <br />
        <button type="submit" className={style.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

Form.defaultProps = {
  onSubmit: () => {},
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);
