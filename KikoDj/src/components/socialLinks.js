import React from 'react';
import './socialLinks.css';
import { FaSoundcloud, FaInstagram, FaTwitter, FaFacebook, FaTwitch} from "react-icons/fa";

const SocialLinks = () => (
  <ul className="SocialLinks">
    <li>
      <a href="https://www.soundcloud.com/kiko_djofficial" alt="DJ Kiko Soundcloud" target="_blank" rel="noreferrer">
        <FaSoundcloud className="fab"/>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/kiko_djofficial/" alt="DJ Kiko Intstagram" target="_blank" rel="noreferrer"> 
        <FaInstagram className="fab"/>
      </a>
    </li>
    <li>
      <a href="www.facebook.com/KIKODJOfficial/" alt="DJ Kiko Facebook" target="_blank" rel="noreferrer">
        <FaFacebook className="fab"/>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/kiko_djofficial" alt="DJ Kiko Twitter" target="_blank" rel="noreferrer">
        <FaTwitter className="fab"/>
      </a>
    </li>
    <li>
      <a href="https://www.twitch.tv/kiko_djofficial" alt="DJ Kiko Twitch" target="_blank" rel="noreferrer">
        <FaTwitch className="fab"/>
      </a>
    </li>
  </ul>  
)

export default SocialLinks;