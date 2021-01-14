/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import smoothscroll from 'smoothscroll-polyfill';
// import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Hero from './hero';
import SocialLinks from './socialLinks';
import EmailSignup from './emailSignup';
import Bio from "./bio";
import Carousel from './carousel';
import SoundCloudWidget from './Soundcloud';
import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  smoothscroll.pollyfill();

  return (
    <div>
      <Header siteTitle="DJ K!KO" />
      <div className="row">
        <div className="column"> 
          {/* <DesktopLayout isDesktop={isDesktop} /> */}
          <Bio mobile="false" />
          <Carousel mobile="false" />
          <SocialLinks />
        </div>
        <Hero />
      </div>
      <div className="column" mobile="true" id="mobileBio">
        <hr className="divider" />
        <Bio mobile="true" />
        <Carousel mobile="true" />
      </div>
      <hr className="divider" />
      <SoundCloudWidget />
      <hr className="divider" />
      <EmailSignup />
      <footer>
          © {new Date().getFullYear()}, Built by Henry Doce
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
