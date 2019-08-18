import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Header = ({ siteTitle, siteDescription }) => (
  <header>
    <h1>
      <Link to="/" dangerouslySetInnerHTML={{ __html: siteTitle }} />
    </h1>
    <p dangerouslySetInnerHTML={{ __html: siteDescription }} />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string
};

Header.defautProps = {
  siteTitle: ``,
  siteDescription: ``
};

export default Header;
