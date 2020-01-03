import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, body }) => (
  <div>
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Book;
