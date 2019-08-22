import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Byline from "../components/byline";
import Meta from "../components/meta";

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpress.post;
    const image = post.featuredImage ? post.featuredImage.sourceUrl : "";

    return (
      <Layout>
        <SEO title={post.title} description={post.title} image={image} />
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
`;
