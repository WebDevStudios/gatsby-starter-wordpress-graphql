import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Byline from "../components/byline";
import Meta from "../components/meta";
import FeaturedImage from "../components/featured";
import { CoreBlock } from "wp-block-components";
/** @jsx jsx */
import { jsx } from "theme-ui";

class Home extends Component {
  render() {
    const posts = this.props.data.wordpress.posts;

    return (
      <Layout>
        {posts.edges.map(post => (
          <article key={post.node.id}>
            <header>
              <FeaturedImage props={post.node} />
              <h2>
                <Link
                  to={post.node.slug}
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                />
              </h2>
              <Byline props={post.node} />
            </header>
            {post.node.blocks.map((block, index) => {
              if ("WordPress_CoreCodeBlock" === block.__typename) {
                block.attributes.content = block.attributes.codeContent;
                delete block.attributes.codeContent;
              }
              return <CoreBlock key={index} block={block} />;
            })}
            <footer>
              <Meta props={post.node} />
            </footer>
          </article>
        ))}
      </Layout>
    );
  }
}

export default Home;

export const pageQuery = graphql`
  query {
    wordpress {
      posts {
        edges {
          node {
            id
            postId
            title
            status
            slug
            date
            ...AuthorQuery
            commentCount
            ...FeaturedImageQuery
            ...TaxonomyQuery
            blocks {
              __typename
              ...CoreCodeBlock
              ...CoreHeadingBlock
              ...CoreImageBlock
              ...CoreListBlock
              ...CoreParagraphBlock
              ...CoreGalleryBlock
              ...CoreCoverBlock
              ...CoreButtonBlock
              ...CoreGravityFormsBlock
            }
          }
        }
      }
    }
  }
`;
