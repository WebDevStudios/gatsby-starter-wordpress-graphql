module.exports = {
  siteMetadata: {
    title: "Gatsby Blog",
    description: "It's Gatsby, powered by WordPress + GraphQL.",
    author: "@gregrickaby"
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WordPress",
        fieldName: "wordPress",
        url: "https://gregrickaby.blog/graphql",
        refetchInterval: 60
      }
    }
  ]
};
