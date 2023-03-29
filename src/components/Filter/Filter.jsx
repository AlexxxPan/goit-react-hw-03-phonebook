import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, handleChange }) => (
  <div>
    <label className={css.name}>Find contacts by name </label>
    <input
      className={css.input}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};