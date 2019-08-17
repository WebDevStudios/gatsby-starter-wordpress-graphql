module.exports = {
  siteMetadata: {
    title: "My Blog",
    description: "A Gatsby site powered by WordPress and GraphQL!",
    author: "@gregrickaby"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WordPress",
        fieldName: "wordPress",
        url: "https://gregrickaby.blog/graphql",
        refetchInterval: 60
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ]
};
