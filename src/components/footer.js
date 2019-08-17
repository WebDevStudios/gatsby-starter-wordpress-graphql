import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Footer = ({ siteTitle }) => (
  <footer>
    <Link href="/" dangerouslySetInnerHTML={{ __html: siteTitle }} />
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;
