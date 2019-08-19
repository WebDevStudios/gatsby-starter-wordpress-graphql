import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo"
import { Meta } from "../components/template-tags";

class TagTemplate extends Component {
  render() {
    const tag = this.props.data.wordpress.tag;

    return (
      <Layout>
        <SEO title={`Tag - ${tag.name}`} description={`A collection of posts from the ${tag.name} tag.`} />
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
              content
              excerpt
            }
          }
        }
      }
    }
  }
`;
