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
              return <Block key={index} attributes={block.attributes} />;
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
        title
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
        blocks {
          __typename
          ...CoreCodeBlock
          ...CoreHeadingBlock
          ...CoreParagraphBlock
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
      }
    }
  }

  fragment CoreCodeBlock on WordPress_CoreCodeBlock {
    name
    attributes {
      __typename
      ... on WordPress_CoreCodeBlockAttributes {
        className
        codeContent: content
      }
    }
  }

  fragment CoreHeadingBlock on WordPress_CoreHeadingBlock {
    name
    attributes {
      __typename
      ... on WordPress_CoreHeadingBlockAttributes {
        align
        anchor
        className
        content
        level
      }
    }
  }

  fragment CoreParagraphBlock on WordPress_CoreParagraphBlock {
    name
    attributes {
      __typename
      ... on WordPress_CoreParagraphBlockAttributesV3 {
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
        textColor
      }
    }
  }
`;
