import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Meta from "../components/meta";

class CategoryTemplate extends Component {
  render() {
    const category = this.props.data.wordpress.category;

    return (
      <Layout>
        <SEO
          title={`Category - ${category.name}`}
          description={`A collection of posts from the ${
            category.name
          } category.`}
        />
        <header>
          <h1>
            Category Archives: <span>{category.name}</span>
          </h1>
        </header>

        {category.posts.edges.map(post => (
          <article id={post.node.id}>
            <header>
              <h2>
                <Link to={post.node.slug}>{post.node.title}</Link>
              </h2>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            <footer>
              <Meta props={post.node} />
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
              ...AuthorQuery
              ...TaxonomyQuery
              content
              excerpt
            }
          }
        }
      }
    }
  }
`;
