import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Characters from '../components/character/Characters';
import { connect } from 'react-redux';
import { getCharacters } from '../selectors/characterSelectors';
import { fetchCharacters } from '../actions/characterActions';

class AllCharacters extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { characters } = this.props;
    return (
      <Characters characters={characters}/>
    );
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
