import React from 'react';
import MainNav from './component/MainNavComponent';
import './App.css';


function App() {
  return (
    <div>
      <MainNav />
      <div className="container">
        <img src="https://happydevelopper.s3.eu-west-3.amazonaws.com/woohoo.jpg"></img>
      </div>
    </div>
  );
}

export default App;
