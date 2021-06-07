import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LanguageList from './LanguageList'
import React from 'react';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/language" component={LanguageList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

