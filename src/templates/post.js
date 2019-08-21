import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Byline from "../components/byline";
import Meta from "../components/meta";
import Paragraph from "../components/blocks/paragraph";

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
          {post.blocks.map(block => {
            switch (block.__typename) {
              case "WordPress_CoreParagraphBlock":
                return <Paragraph block={block} />;
              default:
                return ``;
            }
          })}
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
              id
              name
              slug
            }
          }
        }
        tags {
          edges {
            node {
              name
              id
              slug
            }
          }
        }
        blocks {
          name
          ... on WordPress_CoreParagraphBlock {
            attributes {
              ... on WordPress_CoreParagraphBlockAttributesV3 {
                ...ParagraphInfo
              }
            }
          }
        }
        content
        excerpt
      }
    }
  }
`;
