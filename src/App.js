import React from "react";
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="App">

      <Router>
        <Switch>
          <Route>
            <SearchPage />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;