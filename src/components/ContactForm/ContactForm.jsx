import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './ContactForm.module.css';

export class Contact extends Component {
    state = {
      name: '',
      number: '',
    };
  
    handleChange = e => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      this.props.onSubmit(this.state);
      form.reset();
  
      this.setState({
        name: '',
        number: '',
      });
    };
  
    render() {
      const { name, number } = this.state;
  
      return (
        <form onSubmit={this.handleSubmit}>
          <label className={styles.title}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
  
          <label className={styles.title}>
            Number
            <input
              className={styles.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter phone number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
  
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      );
    }
  }

  Contact.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };