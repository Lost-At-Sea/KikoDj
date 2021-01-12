import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'
import logo from '../assets/transparentLogo.png';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <img src={logo} title="K!KO Logo" alt="K!KO Logo" className="logo" />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `DJ K!KO`,
}

export default Header
