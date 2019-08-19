import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const Menu = () => (
  <StaticQuery
    query={graphql`
      {
        wordpress {
          menuItems(where: { location: PRIMARY }) {
            edges {
              node {
                url
                label
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <ul>
            {data.wordpress.menuItems.edges.map(item => {
              // WordPress includes the entire Site URL in the payload
              // and this is a quick/dirty hack to strip it out so we
              // can leverage Gatsby Link.
              // This can probably go away if this site were actually
              // hosted on gregrickaby.blog. 🤷‍♀️
              let cleanURL = item.node.url.replace(
                "https://gregrickaby.blog",
                ""
              );
              return (
                <li key={item.node.url}>
                  <Link key={item.node.url} to={cleanURL}>
                    {item.node.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      );
    }}
  />
);

export default Menu;
