import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

class AuthorTemplate extends Component {
  render() {
    const author = this.props.data.wordpress.user;
    const authorPosts = author.posts;

    return (
      <Layout>
        <header>
          <h1>
            Author Archives: <span>{author.name}</span>
          </h1>
        </header>

        {authorPosts.edges.map(post => (
          <article>
            <header>
              <h2>
                <Link to={post.node.slug}>{post.node.title}</Link>
              </h2>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
            <footer>
              <span>
                <Link to={author.slug}>{author.name}</Link>
              </span>
              <span>{post.node.date}</span>
              <span>
                {post.node.categories.edges.map(category => (
                  <Link to={category.slug}>{category.name}</Link>
                ))}
              </span>
              <span />
            </footer>
          </article>
        ))}
      </Layout>
    );
  }
}

export default AuthorTemplate;

export const pageQuery = graphql`
  query($id: ID!) {
    wordpress {
      user(id: $id) {
        name
        slug
        posts {
          edges {
            node {
              status
              title
              content
              excerpt
              categories {
                edges {
                  node {
                    name
                    description
                    slug
                  }
                }
              }
              date
            }
          }
        }
      }
    }
  }
`;
