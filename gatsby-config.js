module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsby-starter-wordpress-graphql.netlify.com/",
    organization: {
      name: "WebDevStudios",
      url: "https://webdevstudios.com",
      logo:
        "http://gatsby.wdslab.com/wp-content/uploads/2019/08/wds-logo-small.png"
    },
    social: {
      twitter: "@webdevstudios",
      fbAppID: ""
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WordPress",
        fieldName: "wordpress",
        url: "https://gatsby.wdslab.com/graphql",
        refetchInterval: 60
      }
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-XXXXXXXX-X`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              site_url: siteUrl
            }
          }
          wordpress {
            allSettings {
              title: generalSettingsTitle
              description: generalSettingsDescription
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, wordpress } }) => {
              wordpress.posts.edges.forEach(edge => {
                return {
                  title: edge.node.title,
                  description: edge.node.excerpt,
                  url: site.siteMetadata.site_url + edge.node.slug,
                  guid: site.siteMetadata.site_url + edge.node.slug
                };
              });
            },
            query: `
            {
              wordpress {
                posts {
                  edges {
                    node {
                      title
                      excerpt
                      slug
                      date
                      author {
                        name
                      }
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "WebDevStudios RSS",
            match: "^/category/blog/"
          }
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-theme-ui"
  ]
};
