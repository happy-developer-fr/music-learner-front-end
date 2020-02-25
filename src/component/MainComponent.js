import React, {Component} from 'react';

import {Redirect, Route, Switch} from 'react-router-dom';
import {SONGS} from "../shared/songs";
import Song from "./SongComponent";
import Home from "./HomeComponent";

class Main extends Component {
  render() {

    return (
        <div>
          <Switch>
            <Route path="/home" component={() => <Home/>}/>
            <Route exact path="/songs" component={() => <Song songs={SONGS}/>}/>
            <Redirect to="/home"/>
          </Switch>
        </div>

    );
  }
}

export default Main;
