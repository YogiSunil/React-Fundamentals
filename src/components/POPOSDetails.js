import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../sfpopos-data.json';

function POPOSDetails() {
  const { id } = useParams(); // Get the id from the URL
  const { images, title, desc, hours, features, geo } = data[id]; // Get the data for the location

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{hours}</p>
        <p>{features}</p>
        <p>{geo.lat} {geo.lon}</p>
      </div>
    </div>
  );
}

export default POPOSDetails;