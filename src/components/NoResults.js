//No Results component. This js file displays a message that no search results were found.
import React from 'react';

const NoResults = () =>(
  <li className="not-found">
    <h3>No Results Found</h3>
    <p>You search did not return any results. Please try again.</p>
  </li>
);

export default NoResults;
