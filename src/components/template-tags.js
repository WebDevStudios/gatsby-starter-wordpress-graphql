import React from "react";
import { Link } from "gatsby";

export const Byline = ({ props }) => (
  <>
    <pre>{JSON.stringify(props, null, 2)}</pre>
    <time datetime={props.date} pubdate>
      Published on{" "}
      <Link to={props.slug} rel="bookmark">
        {props.date}
      </Link>
    </time>
    <span>
      {" "}
      by{" "}
      <Link to={"/author/" + props.author.slug}>
        <span>{props.author.name}</span>
      </Link>
    </span>
    {null === props.commentCount ? `` : `with ${props.commentCount} comments`}
  </>
);

export const Meta = ({ props }) => (
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
