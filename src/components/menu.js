import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
/** @jsx jsx */
import { jsx } from "theme-ui";

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
          <ul sx={{ listStyle: "none", paddingY: 0, marginY: 0 }}>
            {data.wordpress.menuItems.edges.map(item => {
              let cleanURL = item.node.url.replace(
                data.wordpress.generalSettings.url,
                ""
              );
              return (
                <li
                  sx={{
                    display: "inline",
                    fontSize: 16,
                    ml: 2
                  }}
                  key={item.node.url}
                >
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
