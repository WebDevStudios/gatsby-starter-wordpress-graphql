// Grab some packages from Node.
const path = require("path");
const slash = require("slash");
const { createRemoteFileNode } = require("gatsby-source-filesystem");

/**
 * Programmatically create posts, pages, and the archives.
 * @link https://www.gatsbyjs.org/docs/node-apis/#createPages
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Run a GraphQL query.
  const result = await graphql(`
    query {
      wordpress {
        posts {
          edges {
            node {
              id
              postId
              slug
              status
            }
          }
        }
        pages {
          edges {
            node {
              id
              pageId
              slug
              status
            }
          }
        }
        categories {
          edges {
            node {
              id
              categoryId
              slug
              description
              name
            }
          }
        }
        tags {
          edges {
            node {
              id
              tagId
              slug
              description
              name
            }
          }
        }
        users {
          edges {
            node {
              id
              userId
              name
              slug
            }
          }
        }
      }
    }
  `);

  // Error checking.
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Destructure data.
  const { posts, pages, categories, tags, users } = result.data.wordpress;

  // Create posts.
  const postTemplate = path.resolve(`./src/templates/post.js`);
  posts.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
        wordpress_id: edge.node.pageId
      }
    });
  });

  // Create pages.
  const pageTemplate = path.resolve(`./src/templates/page.js`);
  pages.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id
      }
    });
  });

  // Create category archives.
  const categoryTemplate = path.resolve(`./src/templates/category.js`);
  categories.edges.forEach(edge => {
    createPage({
      path: `/category/${edge.node.slug}/`,
      component: slash(categoryTemplate),
      context: {
        id: edge.node.id
      }
    });
  });

  // Create tag archives.
  const tagTemplate = path.resolve(`./src/templates/tag.js`);
  tags.edges.forEach(edge => {
    createPage({
      path: `/tag/${edge.node.slug}/`,
      component: slash(tagTemplate),
      context: {
        id: edge.node.id
      }
    });
  });

  // Create author archives.
  const authorTemplate = path.resolve(`./src/templates/author.js`);
  users.edges.forEach(edge => {
    createPage({
      path: `/author/${edge.node.slug}/`,
      component: slash(authorTemplate),
      context: {
        id: edge.node.id
      }
    });
  });
};

/**
 * Download WordPress images, add them to GraphQL schema.
 * @link https://www.gatsbyjs.org/docs/node-apis/#createResolvers
 * @link https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=#createremotefilenode
 */
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store
}) => {
  const { createNode } = actions;
  const resolvers = {
    WordPress_MediaItem: {
      imageFile: {
        type: "File",
        resolve: source => {
          return createRemoteFileNode({
            cache,
            createNode,
            createNodeId,
            store,
            url: source.sourceUrl
          });
        }
      }
    }
  };
  await createResolvers(resolvers);
};
