# gatsby-starter-wordpress-graphql

[![Netlify Status](https://api.netlify.com/api/v1/badges/ee5783b5-a642-46e9-bd0d-35866c7c55e3/deploy-status)](https://app.netlify.com/sites/gatsby-starter-wordpress-graphql/deploys)

A bare-bones [Gatsby](https://gatsbyjs.org) starter powered by [WordPress](https://wordpress.org) and [WPGraphQL](https://www.wpgraphql.com/)!

Includes support for:

- Gutenberg
- Menus
- Posts
- Pages
- Category, Tag, and Author archives
- Basic SEO
- _Sorry, WordPress comments don't work just yet._

👉🏻[View Demo](https://gatsby-starter-wordpress-graphql.netlify.com)

## Development

All you need is a WordPress install with the [WPGraphQL plugin](https://www.wpgraphql.com/) installed and activated.

### Download
```bash
gatsby new <project-name> https://github.com/gregrickaby/gatsby-starter-wordpress-graphql
```

### Configure

There are a few instances where you'll need to change the Site URL. Most of them are in [gatsby-config.js](https://github.com/gregrickaby/gatsby-starter-wordpress-graphql/blob/master/gatsby-config.js), but there's also another one in `src/components/menu.js` (for now, see [#6](https://github.com/gregrickaby/gatsby-starter-wordpress-graphql/issues/6))

### Make it your own
```bash
yarn start
```

### Other commands
**Clear Gatsby's cache and start fresh**
```bash
yarn clean
```

**Build**
```bash
yarn buld
```

## Deployments

The [demo](https://gatsby-starter-wordpress-graphql.netlify.com) is hosted  on [Netlify](https://www.netlify.com/) and deployments are triggered by commits to `master`. You could fork this repo and do the same, or use [Netlify Dev](https://www.netlify.com/products/dev/). If you wanted to automatically deploy when you publish new content in WordPress, try the [Deploy Netlify Webhook](https://wordpress.org/plugins/webhook-netlify-deploy/) plugin.

## Need help?
Feel free to [create an issue](https://github.com/gregrickaby/gatsby-starter-wordpress-graphql/issues) or send me a [tweet](https://twitter.com/gregrickaby). Thanks to the awesome Gatsby community for all the help!
