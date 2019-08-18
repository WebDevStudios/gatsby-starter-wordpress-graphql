import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpress.post;

    return (
      <Layout>
        <article id={post.id}>
          <header>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <div>
              <time datetime={post.date} pubdate>
                Published on{" "}
                <Link to={post.slug} rel="bookmark">
                  {post.date}
                </Link>
              </time>
              <span>
                {" "}
                by{" "}
                <Link to={"/author/" + post.author.slug}>
                  <span>{post.author.name}</span>
                </Link>
              </span>
              {null === post.commentCount
                ? ``
                : `with ${post.commentCount} comments`}
            </div>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.content }} />
          <footer>
            Filed under{" "}
            {post.categories.edges.map(category => (
              <Link
                key={category.node.slug}
                to={"/category/" + category.node.slug}
              >
                {category.node.name}
              </Link>
            ))}{" "}
            and tagged with{" "}
            {post.tags.edges.map(tag => (
              <Link key={tag.node.slug} to={"/tag/" + tag.node.slug}>
                {tag.node.name}
              </Link>
            ))}
          </footer>
        </article>
      </Layout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query($id: ID!) {
    wordpress {
      post(id: $id) {
        id
        postId
        title
        status
        content
        slug
        author {
          name
          slug
        }
        commentCount
        categories {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
        date
        tags {
          edges {
            node {
              name
              id
              slug
            }
          }
        }
      }
    }
  }
`;
