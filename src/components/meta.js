import React from "react";
import { Link, graphql } from "gatsby";
/** @jsx jsx */
import { jsx, Flex } from "theme-ui";

const Meta = ({ props }) => (
  <Flex>
    <span>Filed under </span>
    <ul sx={{ listStyle: "none", padding: 0, margin: 0 }}>
      {props.categories.edges.map(category => (
        <li
          sx={{
            display: "inline",
            ml: 1,
            mr: 1
          }}
          key={category.node.slug}
        >
          <Link to={"/category/" + category.node.slug}>
            {category.node.name}
          </Link>
        </li>
      ))}
    </ul>
    <span> and tagged with </span>
    <ul sx={{ listStyle: "none", padding: 0, margin: 0 }}>
      {props.tags.edges.map(tag => (
        <li
          sx={{
            display: "inline",
            ml: 1
          }}
          key={tag.node.slug}
        >
          <Link to={"/tag/" + tag.node.slug}>{tag.node.name}</Link>
        </li>
      ))}
    </ul>
  </Flex>
);

export default Meta;

export const query = graphql`
  fragment TaxonomyQuery on WordPress_Post {
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
`;
