import React from 'react';
import './NavBar.module.css';
import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white'
    };


    return (
        <nav>
            <h3>Logo</h3>
                <ul className="nav-links">
                    <Link style={navStyle} to="/LoadScreen1">
                        <li> - Load Screen 1 - </li>
                    </Link>
                    <Link style={navStyle} to="/WelcomeScreen">
                        <li> - Welcome Screen - </li>
                    </Link>
                    <Link style={navStyle} to="/Register">
                        <li> - Register - </li>
                    </Link>
                    <Link style={navStyle} to="/SignIn">
                        <li> - Sign In - </li>
                    </Link>
                    <Link style={navStyle} to="/LoadScreen2">
                        <li> - Load Screen 2 - </li>
                    </Link>
                    <Link style={navStyle} to="/Menu">
                        <li> - Menu - </li>
                    </Link>
                    <Link style={navStyle} sto="/Sounds">
                        <li> - Sounds - </li>
                    </Link>
                    <Link style={navStyle} to="/ScenePlaylist">
                        <li> - Scene Playlist - </li>
                    </Link>
                    <Link style={navStyle} to="/Scene Controller">
                        <li> - Scene Controller - </li>
                    </Link>
                    <Link style={navStyle} to="/Settings">
                        <li> - Settings - </li>
                    </Link>
                    <Link style={navStyle} to="/TurnScreen">
                        <li> - Turn Screen - </li>
                    </Link>
                    <Link style={navStyle} to="/Journeys">
                        <li> - Journeys - </li>
                    </Link>
                </ul>
            <div>
                <h1>Nav</h1>
            </div>
        </nav> 
    );
}


export default Nav;

