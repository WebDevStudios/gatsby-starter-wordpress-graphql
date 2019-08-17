import React from "react";
import { graphql } from "gatsby";
import Card from "../components/card";

const Home = ({ data }) => {
  const posts = data.wordPress.posts.nodes;

  return (
    <>
      {posts.map(post => {
        return <Card key={post.id} {...post} />;
      })}
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  {
    wordPress {
      posts(last: 10) {
        nodes {
          id
          title
          excerpt
          slug
        }
      }
    }
  }
`;
