import React from 'react';
import PropTypes from 'prop-types';

import style from './Filter.module.css';

const Filter = ({ filter, changeFilter }) => {
  return (
    <>
      <p className={style.contactText}>Find contacts by name</p>
      <input
        className={style.findInput}
        onChange={changeFilter}
        type="text"
        value={filter}
      />
    </>
  );
};

Filter.defaultProps = {
  filter: '',
  changeFilter: () => {},
};

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};

export default Filter;
