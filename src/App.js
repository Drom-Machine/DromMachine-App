import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/NavBar';
import LoadScreen1 from './components/LoadScreens/LoadScreen1';
import LoadScreen2 from './components/LoadScreens/LoadScreen2';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import Register from './components/Register/Register';
import SignIn from './components/Signin/SignIn';
import Menu from './components/Moon_Menu/Menu';
import Settings from './components/Settings/Settings';
import Sounds from './components/Sounds/Sounds';
import ScenePlaylist from './components/ScenePlaylist/ScenePlaylist';
import SceneController from './components/SceneController/SceneController';
import TurnScreen from './components/TurnScreen/TurnScreen';
import Journeys from './components/Journeys/Journeys';

// import logo from './logo.svg';
// import Button from '@material-ui/core/Button'
// import SaveIcon from '@material-ui/icons/Save'



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/components/LoadScreens/LoadScreen1" component={LoadScreen1} />
          <Route path="/components/WelcomeScreen/WelcomeScreen" component={WelcomeScreen} />
          <Route path="/components/Register/Register" component={Register} />
          <Route path="/components/Signin/SignIn" component={SignIn} />
          <Route path="/components/LoadScreens/LoadScreen2" component={LoadScreen2} />
          <Route path="/components/Moon_Menu/Menu" component={Menu} />
          <Route path="/components/Settings/Settings" component={Settings} />
          <Route path="/components/Sounds/Sounds" component={Sounds} />
          <Route path="/components/ScenePlaylist/ScenePlaylist" component={ScenePlaylist} />
          <Route path="/components/SceneController/SceneController" component={SceneController} />
          <Route path="/components/TurnScreen/TurnScreen" component={TurnScreen} />
          <Route path="/components/Journeys/Journeys" component={Journeys} />
        </Switch>
      </div>
    </Router> 
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);


export default App;
