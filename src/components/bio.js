import React from 'react';
import './bio.css';

const Bio = (props) => (
  <div className="bio" mobile={props.mobile}>
    <h1>Bio</h1>
    <p>
      KIKO is a progressive house and trance producer who is currently a
      resident DJ at La Otra Miami. He has tracks released on BlueSoho
      Recordings , Vertex Recordings, & many more to come! He's headlined events
      at Grand Central, Treehouse, Sky Yard, Groove Cruise and Ground Zero and
      has quickly become known as the go-to party starter of Miami, Florida.
      Follow his social media to catch his KIKBack podcast on Soundcloud, his
      live sets on Twitch, and his next set near you!
    </p>
  </div>
);

export default Bio;
