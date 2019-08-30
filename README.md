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

## WordPress Prerequisites

The following plugins are required to be activated on a WordPress website:

1) [WPGraphQL](https://www.wpgraphql.com/)
2) [WPGraphQL Gutenberg](https://github.com/pristas-peter/wp-graphql-gutenberg)
3) [Deploy Netlify Webhook](https://wordpress.org/plugins/webhook-netlify-deploy/)

These plugins are optional:

1) [WPGraphQL ACF](https://github.com/wp-graphql/wp-graphql-acf)
2) [WPGraphQL Gravity Forms](https://github.com/harness-software/wp-graphql-gravity-forms)
3) [WPGraphQL Yoast](https://github.com/ashhitch/wp-graphql-yoast-seo)


## Gatsby Development

### Download this starter
```bash
gatsby new <project-name> https://github.com/gregrickaby/gatsby-starter-wordpress-graphql
```

### Configure

Open `gatsby-config.js` and point the URLs at your WordPress websites.

### Start a local development server
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

The [demo](https://gatsby-starter-wordpress-graphql.netlify.com) is hosted  on [Netlify](https://www.netlify.com/) and deployments are triggered by commits to `master` and with [Deploy Netlify Webhook](https://wordpress.org/plugins/webhook-netlify-deploy/).

## Contributing
Feel free to [create an issue](https://github.com/gregrickaby/gatsby-starter-wordpress-graphql/issues) and read about how to [Contribute](https://github.com/WebDevStudios/gatsby-starter-wordpress-graphql/blob/master/.github/CONTRIBUTING.MD).

## Props

Thanks to the awesome Gatsby community for all the ❤️!
