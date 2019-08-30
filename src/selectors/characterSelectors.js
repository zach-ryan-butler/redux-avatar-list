export const getCharacters = state => state.characters.characters;
export const getCharactersLoading = state => state.characters.loading;
export const getCharacter = (state, id) => state.characters.characters.find(c => c._id === id);
