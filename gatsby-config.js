module.exports = {
  siteMetadata: {
    title: "Gatsby WordPress Starter",
    description: "A Gatsby stater powered by WordPress and GraphQL!",
    author: "@gregrickaby"
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
