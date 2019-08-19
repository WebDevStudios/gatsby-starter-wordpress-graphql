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
          {data.wordpress.menuItems.edges.map(item => (
            <Link key={item.node.url} to={item.node.url}>
              {item.node.label}
            </Link>
          ))}
        </>
      );
    }}
  />
);

export default Menu;
