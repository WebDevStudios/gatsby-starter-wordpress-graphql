import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Byline from "../components/byline";
import Meta from "../components/meta";
import {
  CoreCodeBlock,
  CoreHeadingBlock,
  CoreParagraphBlock
} from "wp-block-components";

const BlockComponents = {
  WordPress_CoreCodeBlock: CoreCodeBlock,
  WordPress_CoreHeadingBlock: CoreHeadingBlock,
  WordPress_CoreParagraphBlock: CoreParagraphBlock
};

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
          {post.blocks.map((block, index) => {
            const typename = block.__typename;
            if (BlockComponents[typename]) {
              const Block = BlockComponents[typename];
              return (
                <>
                  <pre>{JSON.stringify(block, null, 2)}</pre>
                  <Block key={index} attributes={block.attributes} />;
                </>
              );
            } else {
              return null;
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
          ... on WordPress_CoreCodeBlock {
            ...CodeBlockAtts
          }
          ... on WordPress_CoreParagraphBlock {
            paragraphBlockAtts: attributes {
              ... on WordPress_CoreParagraphBlockAttributesV3 {
                ...CoreParagraphBlock
              }
            }
          }
          ... on WordPress_CoreHeadingBlock {
            ...HeadingBlockAtts
          }
        }
        content
        excerpt
      }
    }
  }

  fragment CodeBlockAtts on WordPress_CoreCodeBlock {
    CoreCodeBlock: attributes {
      className
      content
    }
  }

  fragment CoreParagraphBlock on WordPress_CoreParagraphBlockAttributesV3 {
    align
    backgroundColor
    className
    content
    customBackgroundColor
    customFontSize
    customTextColor
    direction
    dropCap
    fontSize
    placeholder
    textColor
  }

  fragment HeadingBlockAtts on WordPress_CoreHeadingBlock {
    CoreHeadingBlock: attributes {
      align
      anchor
      className
      content
      customTextColor
      level
      placeholder
      textColor
    }
  }
`;
