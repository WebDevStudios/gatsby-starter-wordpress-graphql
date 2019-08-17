module.exports = {
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
