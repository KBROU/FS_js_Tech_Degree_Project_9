//Header component displays logo, search bar, nav links, and the images. Also handles logic if pictures have loaded or not. If they have not loaded the Loading text is displayed.
import React from 'react';
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
        loading={props.loading}
      />
      <Nav
        linkExt={props.links}
        onSearch={props.onSearch}
        loading={props.loading}
      />
      {
        (props.load)
          ? <p>Loading ...</p>
          : <Gallery
            data={props.data}
            topic={props.topic}
          />
      }

    </header>
  )

}

export default Header;
