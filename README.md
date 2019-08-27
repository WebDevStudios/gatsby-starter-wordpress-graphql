# gatsby-starter-wordpress-graphql

[![Netlify Status](https://api.netlify.com/api/v1/badges/ee5783b5-a642-46e9-bd0d-35866c7c55e3/deploy-status)](https://app.netlify.com/sites/gatsby-starter-wordpress-graphql/deploys)

A bare-bones [Gatsby](https://gatsbyjs.org) starter powered by [WordPress](https://wordpress.org) and [WPGraphQL](https://www.wpgraphql.com/)!

Includes support for:

- Gutenberg via [wp-block-components](https://github.com/danielmilner/wp-block-components)
- Menus
- Posts
- Pages
- Category, Tag, and Author archives
- Basic SEO
- _Sorry, neither WordPress comments nor search don't work just yet. But I welcome your contributions!_

👉🏻[View Demo](https://gatsby-starter-wordpress-graphql.netlify.com)

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

## Development

All you need is a WordPress install with the [WPGraphQL](https://www.wpgraphql.com/) and [WPGraphQL Gutenberg](https://github.com/pristas-peter/wp-graphql-gutenberg) plugins installed and activated.

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

### Other handy CLI commands
**Clear Gatsby's cache and start fresh**
```bash
yarn clean
```

**Build/Test before a deployment**
```bash
yarn build
```

## Deployments

The [demo](https://gatsby-starter-wordpress-graphql.netlify.com) is hosted  on [Netlify](https://www.netlify.com/) and deployments are triggered by commits to `master`. You could fork this repo and do the same, or use [Netlify Dev](https://www.netlify.com/products/dev/). If you wanted to automatically deploy when you publish new content in WordPress, try the [Deploy Netlify Webhook](https://wordpress.org/plugins/webhook-netlify-deploy/) plugin.

## Need help?
Feel free to [create an issue](https://github.com/gregrickaby/gatsby-starter-wordpress-graphql/issues) or send me a [tweet](https://twitter.com/gregrickaby).

## Props

Thanks to the awesome Gatsby community for all the ❤️!
