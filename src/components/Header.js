import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Nav from './Nav';
import Search from './Search';
import Gallery from './Gallery';

const Header = (props) => {


  return(
    <header>
      <h1>Gallery App</h1>
      <Logo />
      <Search
        onSearch={props.onSearch}
        history={props.history}
      />
      <Nav
        linkExt={props.links}
        onSearch={props.onSearch}
      />
      <Gallery
        data={props.data}
        topic={props.topic}
      />
    </header>
  )

}

export default Header;


//Working code
/*
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Nav from './Nav';
import Search from './Search';

const Header = props => {
  const results = props.onSearch;
      //console.log(results);
  return(

    <header>
      <h1>Gallery App</h1>
      <Logo />
      <Search results/>
      <Nav />
    </header>
  )

}

export default Header;
*/
