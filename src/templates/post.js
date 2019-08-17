import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpress.post;

    return (
      <Layout>
        <article>
          <header>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <div>
              <span>
                <span>Posted by</span>
                <span>
                  <Link to={"/author/" + post.author.slug}>
                    {post.author.name}
                  </Link>
                </span>
              </span>
              <span>
                <Link to={post.slug} rel="bookmark">
                  <time>{post.date}</time>
                </Link>
              </span>
              <span>
                <span>{post.commentCount} Comments</span>
              </span>
            </div>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <footer>
            <span>
              <span>Posted by</span>
              <span>
                <Link to={"/author/" + post.author.slug}>
                  {post.author.name}
                </Link>
              </span>
            </span>
            <span>
              <Link to={post.path} rel="bookmark">
                <time>{post.date}</time>
              </Link>
            </span>
            <span>
              {post.categories.edges.map(category => (
                <Link key={category.slug} to={"/category/" + category.slug}>
                  {category.name}
                </Link>
              ))}
            </span>
          </footer>
        </article>
      </Layout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query($id: ID!) {
    wordpress {
      post(id: $id) {
        id
        postId
        title
        status
        content
        slug
        author {
          name
          slug
        }
        commentCount
        categories {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
        date
      }
    }
  }
`;
