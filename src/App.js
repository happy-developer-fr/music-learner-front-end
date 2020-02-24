import React from 'react';
import MainNav from './component/MainNavComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MainComponent from "./component/MainComponent";

function App() {
  return (
      <BrowserRouter>
        <div>
          <MainNav/>
          <MainComponent/>
        </div>
      </BrowserRouter>
  );
}

export default App;
