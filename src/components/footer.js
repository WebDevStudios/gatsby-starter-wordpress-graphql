import React from "react";
import PropTypes from "prop-types";

const Footer = ({ siteTitle }) => (
  <footer>
    Copyright {new Date().getFullYear()} &middot; {siteTitle} &middot; Powered
    by Gatsby, GraphQL, and WordPress.
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;
