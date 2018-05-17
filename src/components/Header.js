import React from 'react';
import propTypes from 'prop-types';

export default function Header ({ message }) {
  return (
    <h2 className="text-center">
      {message}
    </h2>
  );
}

Header.propTypes = {
  message: propTypes.string
};