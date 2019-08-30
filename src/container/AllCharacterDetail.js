import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CharacterDetail from '../components/character/CharacterDetail';
import { getCharacter } from '../selectors/characterSelectors';

class AllCharacterDetail extends Component {
  static propTypes = {
    character: PropTypes.object.isRequired
  }

  render() {
    const { character } = this.props;
    return (
      <CharacterDetail character={character}/>
    );
  }
}

const mapStateToProps = (state, props) => ({
  character: getCharacter(state, props.match.params.id)
});

export default connect(
  mapStateToProps
)(AllCharacterDetail);
