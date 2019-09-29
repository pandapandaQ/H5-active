import React from 'react';
import { HashRouter , Switch, Route, Redirect } from "react-router-dom";
import Index from './pages/Index1'
import Index2 from './pages/Index2'
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Switch>
            <Route path="/index1"><Index /></Route>
            <Route path="/index2"><Index2 /></Route>
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
