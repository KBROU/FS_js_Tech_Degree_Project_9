//Takes single GalleryItem item image and runs it through a map loop to add all the images to the variable pics. Pics is returned inside ul tags. Topic is added to the h2 tag to display the topic searched or selected.
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
