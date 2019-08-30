import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Byline from "../components/byline";
import Meta from "../components/meta";
import FeaturedImage from "../components/featured";
import { CoreBlock } from "wp-block-components";

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpress.post;
    const seoImage = post.featuredImage ? post.featuredImage.sourceUrl : "";

    return (
      <Layout>
        <SEO title={post.title} description={post.title} image={seoImage} />
        <article id={post.id}>
          <header>
            <FeaturedImage props={post} />
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <Byline props={post} />
          </header>
          {post.blocks.map((block, index) => {
            if ("WordPress_CoreCodeBlock" === block.__typename) {
              block.attributes.content = block.attributes.codeContent;
              delete block.attributes.codeContent;
            }
            return <CoreBlock key={index} block={block} />;
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
        ...AuthorQuery
        commentCount
        ...FeaturedImageQuery
        ...TaxonomyQuery
        blocks {
          __typename
          ...CoreCodeBlock
          ...CoreHeadingBlock
          ...CoreImageBlock
          ...CoreListBlock
          ...CoreParagraphBlock
          ...CoreGalleryBlock
          ...CoreCoverBlock
          ...CoreButtonBlock
          ...CoreGravityFormsBlock
        }
        content
        excerpt
      }
    }
  }
`;

export const CoreCodeBlockFragment = graphql`
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
`;

export const CoreHeadingBlockFragment = graphql`
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
`;

export const CoreImageBlockFragment = graphql`
  fragment CoreImageBlock on WordPress_CoreImageBlock {
    name
    attributes {
      __typename
      align
      alt
      caption
      className
      height
      href
      linkClass
      linkDestination
      linkTarget
      rel
      url
      width
    }
  }
`;
export const CoreListBlockFragment = graphql`
  fragment CoreListBlock on WordPress_CoreListBlock {
    name
    attributes {
      __typename
      className
      ordered
      values
    }
  }
`;

export const CoreParagraphBlockFragment = graphql`
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

export const CoreGalleryBlockFragment = graphql`
  fragment CoreGalleryBlock on WordPress_CoreGalleryBlock {
    name
    attributes {
      __typename
      ... on WordPress_CoreGalleryBlockAttributesV2 {
        align
        className
        images
        linkTo
        columns
        ids
        imageCrop
      }
    }
  }
`;

export const CoreCoverBlockFragment = graphql`
  fragment CoreCoverBlock on WordPress_CoreCoverBlock {
    name
    attributes {
      __typename
      align
      backgroundType
      className
      customOverlayColor
      dimRatio
      focalPoint
      hasParallax
      id
      overlayColor
      url
    }
  }
`;

export const CoreButtonBlockFragment = graphql`
  fragment CoreButtonBlock on WordPress_CoreButtonBlock {
    name
    attributes {
      __typename
      align
      backgroundColor
      className
      customBackgroundColor
      customTextColor
      text
      textColor
      title
      url
    }
  }
`;

export const CoreGravityFormsBlockFragment = graphql`
  fragment CoreGravityFormsBlock on WordPress_GravityformsFormBlock {
    name
    attributes {
      __typename
      formId
      tabindex
    }
  }
`;
