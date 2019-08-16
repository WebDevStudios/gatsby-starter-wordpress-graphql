module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WordPress',
        fieldName: 'wordPress',
        url: 'https://acf.wpgraphql.com/graphql',
        refetchInterval: 60
      }
    }
  ]
}
