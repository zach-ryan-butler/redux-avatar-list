import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterListItems = characters.map(character => {
    return (
      <li key={character._id}>
        <Character name={character.name} photoUrl={character.photoUrl} />
      </li>
    );
  });

  return (
    <ul>
      {characterListItems}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;
