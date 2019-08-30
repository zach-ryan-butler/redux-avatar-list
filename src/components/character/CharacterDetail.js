import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetail({ character }) {
  const allyItems = character.allies.map(ally => {
    return (
      <li key={ally}>
        {ally}
      </li>
    );
  });
  const enemyItems = character.enemies.map(enemy => {
    return (
      <li key={enemy}>
        {enemy}
      </li>
    );
  });

  return (
    <section>
      <img src={character.photoUrl}/>
      <p>{character.name}</p>
      <p>{character.affiliation}</p>
      <ul>
        allies: {allyItems}
      </ul>
      <ul>
        enemies: {enemyItems}
      </ul>
    </section>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterDetail;
