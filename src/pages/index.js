import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

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
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
            <footer>
              <span>
                <Link to={"/author/" + post.node.author.slug}>
                  {post.node.author.name}
                </Link>
              </span>
              <time>{post.node.date}</time>
              <span>
                {post.node.categories.edges.map(category => (
                  <Link
                    key={category.node.slug}
                    to={"/category/" + category.node.slug}
                  >
                    {category.node.name}
                  </Link>
                ))}
              </span>
              <span>Comments</span>
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
            slug
            status
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
            title
            content
            date
            author {
              name
              slug
            }
          }
        }
      }
    }
  }
`;
