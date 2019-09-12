import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import { Layout as ThemeLayout, Container, Main } from "theme-ui";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        wordpress {
          generalSettings {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <ThemeLayout>
        <Header
          siteTitle={data.wordpress.generalSettings.title}
          siteDescription={data.wordpress.generalSettings.description}
        />
        <Container>
          <Main>{children}</Main>
        </Container>
        <Footer siteTitle={data.wordpress.generalSettings.title} />
      </ThemeLayout>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
