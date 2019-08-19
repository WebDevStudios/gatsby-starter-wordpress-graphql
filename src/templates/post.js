import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Byline, Meta } from "../components/template-tags";

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpress.post;

    return (
      <Layout>
        <article id={post.id}>
          <header>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <Byline props={post} />
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.content }} />
          <footer>
            <Meta props={post} />
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
        tags {
          edges {
            node {
              name
              id
              slug
            }
          }
        }
      }
    }
  }
`;
