import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Meta from "../components/meta";

class AuthorTemplate extends Component {
  render() {
    const author = this.props.data.wordpress.user;

    return (
      <Layout>
        <SEO
          title={`Author - ${author.name}`}
          description={`A collection of posts from the ${
            author.name
          } archives.`}
        />
        <header>
          <h1>
            Author Archives: <span>{author.name}</span>
          </h1>
        </header>

        {author.posts.edges.map(post => (
          <article id={author.id}>
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

export default AuthorTemplate;

export const pageQuery = graphql`
  query($id: ID!) {
    wordpress {
      user(id: $id) {
        id
        name
        slug
        posts {
          edges {
            node {
              status
              title
              date
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
