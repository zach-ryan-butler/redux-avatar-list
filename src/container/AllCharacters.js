import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Characters from '../components/character/Characters';
import { connect } from 'react-redux';
import { getCharacters, getCharactersLoading } from '../selectors/characterSelectors';
import { fetchCharacters } from '../actions/characterActions';

class AllCharacters extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { characters, loading } = this.props;
    if(loading) return <h1>LOADING!</h1>;
    return (
      <Characters characters={characters}/>
    );
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state)
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
