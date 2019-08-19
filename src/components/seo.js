import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image }) => (
  <StaticQuery
    query={graphql`
      {
        wordpress {
          generalSettings {
            title
            description
          }
        }
        site {
          siteMetadata {
            organization {
              logo
              name
              url
            }
            social {
              fbAppID
              twitter
            }
          }
        }
      }
    `}
    render={data => {
      const docTitle = title || data.wordpress.generalSettings.title || "";
      const docDescription =
        description || data.wordpress.generalSettings.description || "";
      const docImage = image || data.site.siteMetadata.organization.logo || "";

      return (
        <>
          <Helmet>
            <title>{docTitle}</title>
            <meta name="description" content={docDescription} />
            <link rel="canonical" href="{data.wordpress.generalSettings.url}" />

            <meta
              property="og:url"
              content={data.site.siteMetadata.organization.url}
            />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={docTitle} />
            <meta property="og:description" content={docDescription} />
            <meta
              property="og:image"
              content={data.site.siteMetadata.organization.logo}
            />
            <meta
              property="fb:app_id"
              content={data.site.siteMetadata.social.fbAppID}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:creator"
              content={data.site.siteMetadata.social.twitter}
            />
            <meta name="twitter:title" content={docTitle} />
            <meta name="twitter:description" content={docDescription} />
            <meta name="twitter:image" content={docImage} />
          </Helmet>
        </>
      );
    }}
  />
);

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: ""
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
