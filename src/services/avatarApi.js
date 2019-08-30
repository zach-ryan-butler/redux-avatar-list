export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => {
      if(!res.ok) throw 'Could not get characters';

      return res.json();
    })
    .then(json => json.map(c => ({
      ...c, photoUrl: c.photoUrl || 'http://placegoat.com/200/200'
    })));
};
