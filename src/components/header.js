import React from "react";
import PropTypes from "prop-types";

const Header = ({ siteTitle, siteDescription }) => (
  <header>
    <h1 dangerouslySetInnerHTML={{ __html: siteTitle }} />
    <p dangerouslySetInnerHTML={{ __html: siteDescription }} />
  </header>
);

Header.PropTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string
};

Header.defautProps = {
  siteTitle: ``,
  siteDescription: ``
};

export default Header;
