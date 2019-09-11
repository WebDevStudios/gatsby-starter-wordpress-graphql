import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Menu from "./menu";
import { useColorMode } from "theme-ui";

const Header = ({ siteTitle, siteDescription }) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header>
      <h1>
        <Link to="/" dangerouslySetInnerHTML={{ __html: siteTitle }} />
      </h1>
      <p dangerouslySetInnerHTML={{ __html: siteDescription }} />
      <Menu />
      <button
        onClick={e => {
          setColorMode(colorMode === "light" ? "dark" : "light");
        }}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string
};

Header.defautProps = {
  siteTitle: ``,
  siteDescription: ``
};

export default Header;
