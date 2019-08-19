# gatsby-starter-wordpress-graphql

A [Gatsby](https://gatsbyjs.org) starter powered by [WordPress](https://wordpress.org) and [GraphQL](https://graphql.org/)!

Demo: https://gatsby-starter-wordpress-graphql.netlify.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/ee5783b5-a642-46e9-bd0d-35866c7c55e3/deploy-status)](https://app.netlify.com/sites/gatsby-starter-wordpress-graphql/deploys)

## Description

Includes support for:

- Gutenberg
- Menus
- Posts
- Pages
- Category, Tag, and Author archives
- [React Helmet](https://github.com/nfl/react-helmet) for basic SEO.
- _Sorry, WordPress comments don't work just yet._

## Development

### Before you start

You will need a WordPress site with the [WPGraphQL](https://www.wpgraphql.com/) plugin installed and activated.

### Get Started

**Download**
```bash
gatsby new <project-name> https://github.com/gregrickaby/gatsby-starter-wordpress-graphql
```

**Configure**

There are a few instances where you'll need to change the Site URL. Most of them are in `gatsby-config.js`, but there's also another one in `src/components/menu.js`

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
Feel free to [create an issue](https://github.com/gregrickaby/gatsby-starter-wordpress-graphql/issues) or send me a [tweet](https://twitter.com/gregrickaby). Thanks to the awesome Gatsby community for all the help!
