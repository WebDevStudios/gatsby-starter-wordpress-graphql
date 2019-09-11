import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Menu from "./menu";
import { useColorMode } from "theme-ui";

const Header = ({ siteTitle, siteDescription }) => {
  const modes = ["light", "swiss", "dark", "deep"];
  const [mode, setMode] = useColorMode();
  const cycleMode = e => {
    const i = modes.indexOf(mode);
    const next = modes[(i + 1) % modes.length];
    setMode(next);
  };
  return (
    <header>
      <h1>
        <Link to="/" dangerouslySetInnerHTML={{ __html: siteTitle }} />
      </h1>
      <p dangerouslySetInnerHTML={{ __html: siteDescription }} />
      <Menu />
      <button onClick={cycleMode}>{mode}</button>
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
