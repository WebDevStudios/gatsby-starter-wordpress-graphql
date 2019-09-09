import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Byline from "../components/byline";
import Meta from "../components/meta";

/** @jsx jsx */
import { jsx } from "theme-ui"


class Home extends Component {
  render() {
    const posts = this.props.data.wordpress.posts;

    return (
      <Layout>
        {posts.edges.map(post => (
          <article key={post.node.id}>
            <header>
              <h2>
                <Link
                  to={post.node.slug}
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                />
              </h2>
              <Byline props={post.node} />
            </header>
            <section
              sx={{
                backgroundColor: 'secondary',
              }}
            dangerouslySetInnerHTML={{ __html: post.node.content }} />
            <footer>
              <Meta props={post.node} />
            </footer>
          </article>
        ))}
      </Layout>
    );
  }
}

export default Home;

export const pageQuery = graphql`
  query {
    wordpress {
      posts {
        edges {
          node {
            id
            postId
            title
            status
            slug
            date
            ...AuthorQuery
            commentCount
            featuredImage {
              srcSet
              sourceUrl
            }
            ...TaxonomyQuery
            content
            excerpt
          }
        }
      }
    }
  }
`;
