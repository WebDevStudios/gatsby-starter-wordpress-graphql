import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

class CategoryTemplate extends Component {
  render() {
    const category = this.props.data.wordpress.category;
    const categoryPosts = category.posts;

    return (
      <Layout>
        <header>
          <h1>
            Category Archives: <span>{category.name}</span>
          </h1>
        </header>

        {categoryPosts.edges.map(post => (
          <article>
            <header>
              <h2>
                <Link to={post.node.slug}>{post.node.title}</Link>
              </h2>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
            <footer>
              <span>
                <Link to={post.node.author.slug}>{post.node.author.name}</Link>
              </span>
              <time>{post.node.date}</time>
              <span>
                {post.node.categories.map(category => (
                  <Link to={category.slug}>{category.name}</Link>
                ))}
              </span>
            </footer>
          </article>
        ))}
      </Layout>
    );
  }
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query($id: ID!) {
    wordpress {
      category(id: $id) {
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
            }
          }
        }
      }
    }
  }
`;
