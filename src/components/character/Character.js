import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Character({ name, photoUrl, id }) {
  return (
    <section>
      <Link to={`/${name}/${id}`}>
        <img src={photoUrl}/>
        <p>{name}</p>
      </Link>
    </section>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  id: PropTypes.string.isRequired
};

export default Character;
