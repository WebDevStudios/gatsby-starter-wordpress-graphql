import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="Page not found"
      description="The page you requested was not found."
    />
    <h2>Sorry! That page doesn't seem to exist.</h2>
  </Layout>
);

export default NotFoundPage;
