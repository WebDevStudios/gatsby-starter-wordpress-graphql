import React from "react";
import { Link } from "gatsby";

const Meta = ({ props }) => (
  <>
    Filed under{" "}
    <ul>
      {props.categories.edges.map(category => (
        <li key={category.node.slug}>
          <Link to={"/category/" + category.node.slug}>
            {category.node.name}
          </Link>
        </li>
      ))}{" "}
    </ul>
    and tagged with{" "}
    <ul>
      {props.tags.edges.map(tag => (
        <li key={tag.node.slug}>
          <Link to={"/tag/" + tag.node.slug}>{tag.node.name}</Link>
        </li>
      ))}
    </ul>
  </>
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
