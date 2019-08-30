import { FETCH_CHARACTERS } from '../actions/characterActions';

const initialState = {
  loading: false,
  characters: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return { ...state, characters: action.payload, loading: false };
    default:
      return state;
  }
}
