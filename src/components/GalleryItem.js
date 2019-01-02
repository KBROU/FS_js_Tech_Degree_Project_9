//Takes picture data in stores it in an img tag insided list tags.
import React from 'react';

const GalleryItem = (props) => (
  <li>
    <img src={props.url} alt="" />
  </li>
);

export default GalleryItem;
