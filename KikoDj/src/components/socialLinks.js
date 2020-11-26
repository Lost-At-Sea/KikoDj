import React from 'react';
import './socialLinks.css';

const SocialLinks = () => (
  <ul className="SocialLinks">
    <li>
      <a href="https://www.soundcloud.com/kiko_djofficial" alt="DJ Kiko Soundcloud" target="_blank" rel="noreferrer">
        <i className="fab fa-soundcloud"></i>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/kiko_djofficial/" alt="DJ Kiko Intstagram" target="_blank" rel="noreferrer"> 
        <i className="fab fa-instagram"></i>
      </a>
    </li>
    <li>
      <a href="www.facebook.com/KIKODJOfficial/" alt="DJ Kiko Facebook" target="_blank" rel="noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/kiko_djofficial" alt="DJ Kiko Twitter" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
    </li>
  </ul>  
)

export default SocialLinks;