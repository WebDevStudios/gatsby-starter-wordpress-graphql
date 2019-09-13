import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
/** @jsx jsx */
import { jsx, Flex } from "theme-ui";

class PageTemplate extends Component {
  render() {
    const page = this.props.data.wordpress.page;
    const image = page.featuredImage ? page.featuredImage.sourceUrl : "";

    return (
      <Layout>
        <SEO title={page.title} description={page.excerpt} image={image} />
        <h1
          sx={{ marginTop: 0 }}
          dangerouslySetInnerHTML={{ __html: page.title }}
        />
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Layout>
    );
  }
}

export default PageTemplate;

export const pageQuery = graphql`
  query($id: ID!) {
    wordpress {
      page(id: $id) {
        title
        featuredImage {
          srcSet
          sourceUrl
        }
        content
        excerpt
      }
    }
  }
`;
