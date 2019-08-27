import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const FeaturedImage = ({ props }) => {
  // No featured image? Bail...
  if (!props.featuredImage) {
    return null;
  }

  // Otherwise display featured image.
  return (
    <Img
      fluid={props.featuredImage.imageFile.childImageSharp.fluid}
      alt={props.altText}
    />
  );
};

export default FeaturedImage;

export const query = graphql`
  fragment FeaturedImageQuery on WordPress_Post {
    featuredImage {
      altText
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`;
