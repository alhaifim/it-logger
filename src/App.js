import React, {Fragment, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';   // bring JavaScript
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import './App.css';

const App = () => {

useEffect(()=> {
  //initialize materialize JS
  M.AutoInit();
})
  return <Fragment>
  <SearchBar/>
  <div className="container">
  <Logs/>
  </div>
  
  </Fragment>;
};

export default App;
