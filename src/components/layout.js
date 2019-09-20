import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import { Global } from "@emotion/core";
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
      <>
        <Global
          styles={{
            body: {
              margin: 0
            }
          }}
        />
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
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
