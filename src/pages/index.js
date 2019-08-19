import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Byline from "../components/byline";
import Meta from "../components/meta";

class Home extends Component {
  render() {
    const posts = this.props.data.wordpress.posts;

    return (
      <Layout>
        {posts.edges.map(post => (
          <article key={post.node.id}>
            <header>
              <h2>
                <Link to={post.node.slug}>{post.node.title}</Link>
              </h2>
              <Byline props={post.node} />
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
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
            date
            slug
            status
            author {
              name
              slug
            }
            commentCount
            featuredImage {
              srcSet
              sourceUrl
            }
            categories {
              edges {
                node {
                  categoryId
                  name
                  slug
                  link
                }
              }
            }
            tags {
              edges {
                node {
                  tagId
                  name
                  slug
                  link
                }
              }
            }
            content
            excerpt
          }
        }
      }
    }
  }
`;
