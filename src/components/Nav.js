import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';


const Nav = props => (
  <nav className="main-nav">
    <ul>
    <li><NavLink to={`/dogs`} onClick={() => {props.onSearch('dogs')}}>Dogs</NavLink ></li>
    <li><NavLink to={`/soccer`} onClick={() => {props.onSearch('soccer')}}>Soccer</NavLink ></li>
    <li><NavLink to={`/space`} onClick={() => {props.onSearch('space')}}>Space</NavLink ></li>
    </ul>
  </nav>
);


export default Nav;

//Notes
/*
<li><NavLink to={`/dogs`} onClick={() => {props.onSearch('dogs')}}>Dogs</NavLink ></li>
<li><NavLink to={`/soccer`} onClick={() => {props.onSearch('soccer')}}>Soccer</NavLink ></li>

This code below is working
const navLinks = props.linkExt.map((link, i) =>
  <li key={i}>
    <NavLink
      to={`/${link}`}
      onClick={() => {
          props.onSearch(link);
        }
      }
    >
      {link}
    </NavLink>
  </li>
);
return (
  <nav className="main-nav">
    <ul>
      {navLinks}
    </ul>
  </nav>
);
};
 */
