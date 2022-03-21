import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Connexion from './components/Connexion';
import Home from './components/Home';
import Creation from './components/Creation';
import Nav from './components/Nav';




function App() {
  return (

    <Router>
    <div className="App">
<Nav/>
<Switch>
<Route path="/connexion"><Connexion /></Route>
<Route path="/creation" ><Creation /></Route>
<Route path="/" ><Home /></Route>
 <Route path="/" />
<h1>Home</h1>
<Route/>
</Switch>

{/* <Connexion></Connexion> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </Router>
  );
}

export default App;
