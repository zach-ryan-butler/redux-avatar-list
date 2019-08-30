import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, photoUrl }) {
  return (
    <section>
      <img src={photoUrl}/>
      <p>{name}</p>
    </section>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string
};

export default Character;
