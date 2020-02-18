import React from 'react';
import MainNav from './component/MainNavComponent';
import './App.css';


function App() {
  return (
    <div>
      <MainNav />
      <div className="container col-8 offset-2">
        <img className="img-fluid rounded" src="https://happydevelopper.s3.eu-west-3.amazonaws.com/woohoo.jpg" alt="woohoo"></img>
      </div>
    </div>
  );
}

export default App;
