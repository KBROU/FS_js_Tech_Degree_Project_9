//Creates a navigation bar with the three default items. When user clicks one of the buttons onSearch is fired which fires perfromSearch in App.js. Perform search will search the default item in Flicr image data base.
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => (
  <nav className="main-nav">
    <ul>
    <li><NavLink to={`/dogs`} onClick={() => {props.onSearch('dogs'); props.loading()}}>Dogs</NavLink ></li>
    <li><NavLink to={`/soccer`} onClick={() => {props.onSearch('soccer'); props.loading()}}>Soccer</NavLink ></li>
    <li><NavLink to={`/space`} onClick={() => {props.onSearch('space'); props.loading()}}>Space</NavLink ></li>
    </ul>
  </nav>
);

export default Nav;
