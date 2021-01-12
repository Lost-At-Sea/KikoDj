import React from 'react';
import './socialLinks.css';
import { FaSoundcloud, FaInstagram, FaTwitter, FaFacebook, FaTwitch } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';
import { SiBeatport } from 'react-icons/si';
import Bounce from 'react-reveal/Bounce';

const SocialLinks = () => (
  <Bounce left cascade>
    <ul className="SocialLinks">
        <li>
          <a href="https://www.beatport.com/artist/k%21ko/932330" alt="DJ Kiko Beatport" target="_blank" rel="noreferrer">
            <SiBeatport className="fab"/>
          </a>
        </li>
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
        <li mobile="true">
          <a href="#mobileBio" alt="Scroll Down" rel="noreferrer" >
            <IoIosArrowDown className="fab" />
          </a>
        </li>
        <li mobile="false">
          <a href="#soundCloudWidget" alt="Scroll Down" rel="noreferrer" >
            <IoIosArrowDown className="fab" />
          </a>
        </li>
    </ul>  
  </Bounce>
)

export default SocialLinks;