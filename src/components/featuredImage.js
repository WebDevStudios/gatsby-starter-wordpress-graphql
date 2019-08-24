import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const FeaturedImage = ({ props }) => (
  <>
    <Img fluid={props.imageFile.childImageSharp.fluid} alt={props.altText} />
  </>
);

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
