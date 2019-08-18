import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";

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
        <Header
          siteTitle={data.wordpress.generalSettings.title}
          siteDescription={data.wordpress.generalSettings.description}
        />
        <section>
          <main>{children}</main>
        </section>
        <Footer siteTitle={data.wordpress.generalSettings.title} />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
