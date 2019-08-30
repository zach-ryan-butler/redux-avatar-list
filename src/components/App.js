import React from 'react';
import AllCharacters from '../container/AllCharacters';
import AllCharacterDetail from '../container/AllCharacterDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:name/:id" component={AllCharacterDetail}/>
        <Route path="/" component={AllCharacters}/>
      </Switch>
    </Router>
  );
}
 
