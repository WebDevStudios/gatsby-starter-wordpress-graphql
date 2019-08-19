import React from "react";
import { Link } from "gatsby";

const Byline = ({ props }) => (
  <>
    <time dateTime={props.date}>
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

export default Byline;
