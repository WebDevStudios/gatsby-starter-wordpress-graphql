import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Menu from "./menu";
/** @jsx jsx */
import { jsx, Container, Flex, useColorMode } from "theme-ui";

const Header = ({ siteTitle, siteDescription }) => {
  const modes = ["default", "swiss", "deep", "dark"];
  const [mode, setMode] = useColorMode();
  const cycleMode = e => {
    const i = modes.indexOf(mode);
    const next = modes[(i + 1) % modes.length];
    setMode(next);
  };
  return (
    <header sx={{ variant: "layout.header" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 1
        }}
      >
        <Flex sx={{ flexDirection: "column" }}>
          <h1 sx={{ my: 0 }}>
            <Link to="/" dangerouslySetInnerHTML={{ __html: siteTitle }} />
          </h1>
          <p
            sx={{ fontSize: 20 }}
            dangerouslySetInnerHTML={{ __html: siteDescription }}
          />
        </Flex>
        <Flex sx={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Menu />
          <button
            sx={{
              mt: 2,
              p: 1,
              variant: "buttons.primary",
              width: 50
            }}
            onClick={cycleMode}
          >
            {mode}
          </button>
        </Flex>
      </Container>
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
