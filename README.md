# gatsby-graphql-wordpress-starter

A [Gatsby](https://gatsbyjs.org) starter powered by [WordPress](https://wordpress.org) and [GraphQL](https://graphql.org/).

## Description

Meant to be a barebones starter to help you get up and running quickly. Includes [React Helmet](https://github.com/nfl/react-helmet) for basic SEO. _Sorry, WordPress comments don't work just yet._

## Before you start

You will need a WordPress site with the [WPGraphQL](https://www.wpgraphql.com/) plugin installed and activated.

## Development

**Clone**
```bash
git clone https://github.com/gregrickaby/gatsby-graphql-wordpress-starter.git
```

**Install**
```bash
yarn install
```

**Configure**

Open `gatsby-config.js` and change the URL to your WordPress site, with the `/graphql` endpoint.
```js
url: "https://your-website.com/graphql",
```

**Develop**
```bash
gatsby develop
```

**Deploy**
```bash
gatsby build
```

## Need help?
Feel free to [create an issue](https://github.com/gregrickaby/gatsby-graphql-wordpress/issues) or send me a [tweet](https://twitter.com/gregrickaby). Thanks to the awesome Gatsby community for all the help!
