module.exports = {
  siteMetadata: {
    organization: {
      name: "Greg Rickaby",
      url: "https://gregrickaby.blog",
      logo: "https://gregrickaby.blog/wp-content/uploads/2019/08/site-icon.png"
    },
    social: {
      twitter: "@gregrickaby",
      fbAppID: ""
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WordPress",
        fieldName: "wordpress",
        url: "https://gregrickaby.blog/graphql",
        refetchInterval: 60
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ]
};
