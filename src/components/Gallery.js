import React from 'react';
import GalleryItem from './GalleryItem';
import NoResults from './NoResults';

const Gallery = props => {

  const results = props.data;
  let topic = props.topic;
  let pics;
  if(results.length > 0) {
    pics = results.map(pic =>
      <GalleryItem url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} />
    );
  } else {
    //pics = `No search results for ${topic}. Please `;
    pics = <NoResults />
  }

  return (
    <div className="photo-container">
          <h2>Results for {topic}</h2>
          <ul>
            {pics}
          </ul>
    </div>
  );
}

export default Gallery;


//Notes on Flicr URL
//https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
