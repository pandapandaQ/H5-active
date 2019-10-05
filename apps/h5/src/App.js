import React from 'react';
import { HashRouter , Switch, Route, Redirect } from "react-router-dom";
import Index from './pages/Index'
import './App.css';

function App() {
  return (
    <div className="App">
     <Index />
    </div>
  );
}

export default App;
