import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => (
  <div className={styles.list}>
    <ul>
      {contacts.map((contact) => (
        <li className={styles.item} key={shortid.generate()}>
          {contact.name}: {contact.number}
          <button
            className={styles.button}
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};
