import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

class TagTemplate extends Component {
  render() {
    const tag = this.props.data.wordpress.tag;

    return (
      <Layout>
        <header>
          <h1>
            Tag Archives: <span>{tag.name}</span>
          </h1>
        </header>

        {tag.posts.edges.map(post => (
          <article id={post.node.id}>
            <header>
              <h2>
                <Link to={post.node.slug}>{post.node.title}</Link>
              </h2>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
            <footer>
              <span>
                <Link to={"/author/" + post.node.author.slug}>
                  {post.node.author.name}
                </Link>
              </span>
              <time>{post.node.date}</time>
              Filed under{" "}
              {post.node.categories.edges.map(category => (
                <Link
                  key={category.node.slug}
                  to={"/category/" + category.node.slug}
                >
                  {category.node.name}
                </Link>
              ))}{" "}
              and tagged with{" "}
              {post.node.tags.edges.map(tag => (
                <Link key={tag.node.slug} to={"/tag/" + tag.node.slug}>
                  {tag.node.name}
                </Link>
              ))}
            </footer>
          </article>
        ))}
      </Layout>
    );
  }
}

export default TagTemplate;

export const pageQuery = graphql`
  query($id: ID!) {
    wordpress {
      tag(id: $id) {
        id
        name
        slug
        posts {
          edges {
            node {
              id
              slug
              title
              date
              content
              excerpt
              author {
                id
                name
                slug
              }
              categories {
                edges {
                  node {
                    name
                    description
                    slug
                  }
                }
              }
              tags {
                edges {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
