module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsby.wdslab.com",
    organization: {
      name: "WebDevStudios",
      url: "https://gatsby.wdslab.com",
      logo: "http://gatsby.wdslab.com/wp-content/uploads/2019/08/wds-logo-small.png"
    },
    social: {
      twitter: "@webdevstudios",
      fbAppID: ""
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WordPress",
        fieldName: "wordpress",
        url: "https://gatsby.wdslab.com/graphql",
        refetchInterval: 60
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-theme-ui",
  ]
};
