import React from "react";
import { HashRouter } from 'react-router-dom';
import Nav from "./Components/Nav/Nav";
import Rotas from './Rotas';

function App() {
  return (
    <div className="container">
      <HashRouter>
        <Nav />
        <Rotas />
      </HashRouter>
    </div>
  );
}

export default App;
