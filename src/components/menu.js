import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const Menu = () => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
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
        wordpress {
          generalSettings {
            url
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <ul>
            {data.wordpress.menuItems.edges.map(item => {
              let cleanURL = item.node.url.replace(
                data.wordpress.generalSettings.url,
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
