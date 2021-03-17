import './App.css';
import MainPage from './pages/MainPage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';

function App() {
  return <Router>
    <div id = 'App' width = '100%'>
      <Switch>
        <Route path = '/projects/:id' component = {ProjectsPage}>
        </Route>
        <Route path = '/'>
          <MainPage />
        </Route>
      </Switch>
      
    </div>
  </Router>;
}

export default App;
