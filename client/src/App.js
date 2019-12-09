import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route exact path='/movies/:id' render={(props) => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;
