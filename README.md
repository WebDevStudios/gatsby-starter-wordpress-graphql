# gatsby-graphql-wordpress-starter

A [Gatsby](https://gatsbyjs.org) starter powered by [GraphQL](https://graphql.org/) and [WordPress](https://wordpress.org)! Check out the demo: https://gatsby-graphql-wordpress-starter.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/ee5783b5-a642-46e9-bd0d-35866c7c55e3/deploy-status)](https://app.netlify.com/sites/gatsby-graphql-wordpress-starter/deploys)

## Description

A barebones starter to help you get up and running quickly. Includes support for:

- Gutenberg
- Posts
- Pages
- Category, Tag, and Author archivies
- [React Helmet](https://github.com/nfl/react-helmet) for basic SEO.
- _Sorry, WordPress comments don't work just yet._

## Development

### Before you start

You will need a WordPress site with the [WPGraphQL](https://www.wpgraphql.com/) plugin installed and activated.

### Get Started

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
yarn start
```

**Deploy**
```bash
yarn buld
```

**Clear cache and start fresh**
```bash
yarn clean
```

## Need help?
Feel free to [create an issue](https://github.com/gregrickaby/gatsby-graphql-wordpress/issues) or send me a [tweet](https://twitter.com/gregrickaby). Thanks to the awesome Gatsby community for all the help!
