import React from "react";
import { Link } from "gatsby";

const Meta = ({ props }) => (
  <>
    Filed under{" "}
    <ul>
      {props.categories.edges.map(category => (
        <li>
          <Link key={category.node.slug} to={"/category/" + category.node.slug}>
            {category.node.name}
          </Link>
        </li>
      ))}{" "}
    </ul>
    and tagged with{" "}
    <ul>
      {props.tags.edges.map(tag => (
        <li>
          <Link key={tag.node.slug} to={"/tag/" + tag.node.slug}>
            {tag.node.name}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default Meta;
