import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

class AuthorTemplate extends Component {
  render() {
    const author = this.props.data.wordpress.user;

    return (
      <Layout>
        <pre>{JSON.stringify(author, null, 2)}</pre>
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
            <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
            <footer>
              <span>
                <Link to={author.slug}>{author.name}</Link>
              </span>
              <span>{post.node.date}</span>
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
              content
              excerpt
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
            }
          }
        }
      }
    }
  }
`;
