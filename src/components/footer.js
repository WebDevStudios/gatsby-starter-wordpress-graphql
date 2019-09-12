import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx, Container } from "theme-ui";

const Footer = ({ siteTitle }) => (
  <footer sx={{ variant: "layout.footer" }}>
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        py: 1
      }}
    >
      <p>
        Copyright {new Date().getFullYear()} &middot; {siteTitle} &middot;
        Powered by Gatsby, GraphQL, and WordPress.
      </p>
    </Container>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;
