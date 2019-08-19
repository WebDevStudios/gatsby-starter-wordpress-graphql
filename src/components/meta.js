import React from "react";
import { Link } from "gatsby";

const Meta = ({ props }) => (
  <>
    Filed under{" "}
    {props.categories.edges.map(category => (
      <Link key={category.node.slug} to={"/category/" + category.node.slug}>
        {category.node.name}
      </Link>
    ))}{" "}
    and tagged with{" "}
    {props.tags.edges.map(tag => (
      <Link key={tag.node.slug} to={"/tag/" + tag.node.slug}>
        {tag.node.name}
      </Link>
    ))}
  </>
);

export default Meta;
